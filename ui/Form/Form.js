import styles from './Form.module.scss';
import {cloneElement, createRef, Fragment, useEffect, useState} from 'react';
import InputMask from 'react-input-mask';

const useOutsideAlerter = (ref, action) => {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				action();
			}
		};
		
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [action, ref]);
};

const Option = ({children, value, isActive, callback}) => (
	<span className={`${styles.Option} ${isActive ? styles.Option_active : ''}`} onClick={callback.bind(this, value)}>
		{children}
	</span>
);

const Select = ({children, value, callback, title, filter = false, isSort = false, theme = 'light', ...props}) => {
	const FIRST_ELEMENT = 0;
	
	const childrenList = children.props.children.filter((child) => child.type.name === 'Option');
	const childrenValueList = childrenList.map((child) => child.props.value);
	
	const [activeValue, setActiveValue] = useState(0);
	
	const childrenListWithProps = childrenList.map((child, index) => {
		return cloneElement(
			child,
			{...child.props, callback: callback, key: index, isActive: activeValue === index},
		);
	});
	
	const [isActive, setIsActive] = useState(false);
	const [isTabPressed, setIsTabPressed] = useState(false);
	
	useEffect(() => {
		callback(value);
	}, [callback, childrenValueList, value]);
	
	useEffect(() => {
		callback(childrenValueList[FIRST_ELEMENT]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	useEffect(() => {
		setActiveValue(childrenValueList.indexOf(value));
		// eslint-disable-next-line
	}, [value]);
	
	const selectRef = createRef();
	const selectOptionsRef = createRef();
	
	useOutsideAlerter(selectRef, () => setIsActive(false));
	
	let focusableElements;
	if (typeof document !== 'undefined') {
		focusableElements = document.querySelectorAll('*[tabindex], input, select, textarea');
	}
	
	const handleKeyDownSelect = (event) => {
		event.preventDefault();
		
		if (event.key === 'Enter') {
			setIsActive(!isActive);
			selectOptionsRef.current?.focus();
		} else if (event.key === 'ArrowUp') {
			if (activeValue > 0) {
				callback(childrenValueList[activeValue - 1]);
				setActiveValue(activeValue - 1);
			}
		} else if (event.key === 'ArrowDown') {
			if (activeValue < childrenValueList.length - 1) {
				callback(childrenValueList[activeValue + 1]);
				setActiveValue(activeValue + 1);
			}
		} else if (event.key === 'ArrowLeft') {
			if (activeValue > 0) {
				callback(childrenValueList[activeValue - 1]);
				setActiveValue(activeValue - 1);
			}
		} else if (event.key === 'ArrowRight') {
			if (activeValue < childrenValueList.length - 1) {
				callback(childrenValueList[activeValue + 1]);
				setActiveValue(activeValue + 1);
			}
		} else if (event.key === 'Escape') {
			setIsActive(false);
		} else if (event.key === 'Tab') {
			const index = Array.from(focusableElements).indexOf(selectRef.current);
			const nextIndex = index + 1;
			if (!isTabPressed) {
				setIsActive(false);
				setIsTabPressed(true);
			} else {
				(focusableElements[nextIndex])?.focus();
			}
		}
	};
	
	return (
		<div
			{...props}
			className={`
				${styles.Select}
				${isActive ? styles.Select_active : ''}
				${isSort ? styles.Select_small : ''}
				${theme === 'dark' ? styles.Select_dark : ''}
			`}
			onClick={(event) => {
				event.target?.focus();
				setIsActive(!isActive);
			}}
			onKeyDown={handleKeyDownSelect}
			onBlur={setIsActive.bind(this, false)}
			tabIndex={0}
			ref={selectRef}
			style={{overflow: isActive ? 'visible' : 'hidden'}}
		>
			<div
				className={`${styles.Select__title} ${filter ? styles.Select__title_filter : ''}`}
			>
				<div>
					<i>{title}</i>
					<span>{value}</span>
				</div>
				{isSort ? (
					<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L4 4L7 1" stroke="#25282B" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				) : (
					<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6 8L12 2L10.6 0.6L6 5.2L1.4 0.6L0 2L6 8Z" fill="#988787"/>
					</svg>
				)}
			</div>
			<div
				className={`${styles.Select__options} ${isActive ? styles.Select__options_active : ''}`}
			>
				{childrenListWithProps}
			</div>
		</div>
	);
};

const Input = ({title, type, inputTopValue, handleInputTop, htmlType = 'text', error = '', filter = false, ...props}) => {
	switch (type) {
		case 'date':
			return (
				<Fragment>
					<label
						className={`${styles.Input} ${styles.Input_date} ${filter ? styles.Input_filter : ''} ${error ? styles.Input__error : ''}`}
					>
						<div>
							<i>{title}</i>
							<input {...props} type="text"/>
						</div>
						<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.7778 1.77783H16.8889C17.4412 1.77783 17.8889 2.22555 17.8889 2.77783V15.0001C17.8889 15.5523 17.4412 16.0001 16.8889 16.0001H2C1.44771 16.0001 1 15.5523 1 15.0001V2.77783C1 2.22555 1.44772 1.77783 2 1.77783H3.11111M11.5556 1.77783H9.44444H7.33333" stroke="#988787"/>
							<rect x="4.55566" width="1" height="3.55556" rx="0.5" fill="#988787"/>
							<rect x="13.4443" width="1" height="3.55556" rx="0.5" fill="#988787"/>
						</svg>
					</label>
					{error && <em className={styles.Form__error}>{error}</em>}
				</Fragment>
			);
		
		case 'range':
			return (
				<Fragment>
					<div className={styles.Wrapper}>
						<label
							className={`${styles.Input} ${styles.Input__range} ${filter ? styles.Input_filter : ''} ${error ? styles.Input__error : ''}`}
						>
							<div>
								<input {...props} type="number" placeholder="Цена, от"/>
								<input type="number" placeholder="Цена, до" value={inputTopValue} onInput={handleInputTop}/>
							</div>
						</label>
						<em>Минимальная цена - 250 руб, максимальная - 6750</em>
					</div>
					{error && <em className={styles.Form__error}>{error}</em>}
				</Fragment>
			);
		
		case 'tel':
			return (
				<Fragment>
					<label
						className={`${styles.Input} ${styles.Input_tel} ${error ? styles.Input__error : ''}`}
					>
						<div className={styles.Input__select}>
							<div className={styles.Input__country}>
								<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="-6.10352e-05" width="14" height="3.66667" fill="#FFFFFF"/>
									<rect y="3.66644" width="14" height="3.66667" fill="#0131A7"/>
									<rect y="7.33344" width="14" height="3.66667" fill="#D6261A"/>
								</svg>
								<svg width="5" height="2" viewBox="0 0 5 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.222609 0.178026C0.148795 0.118975 0.19055 -6.10352e-05 0.285078 -6.10352e-05H4.71492C4.80945 -6.10352e-05 4.8512 0.118975 4.77739 0.178026L2.56247 1.94996C2.52595 1.97918 2.47405 1.97918 2.43753 1.94996L0.222609 0.178026Z" fill="#C4C4C4" fillOpacity="0.5"/>
								</svg>
							</div>
						</div>
						<div>
							<i>{title}</i>
							<InputMask
								{...props}
								mask="+7 999 999 9999"
								maskChar=""
								type="tel"
								alwaysShowMask={false}
							/>
						</div>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="7" cy="6.99994" r="7" fill="#212121"/>
							<circle cx="7" cy="3.99994" r="1" fill="white"/>
							<path d="M6 5.99994H8V11.9999H6V7.99994L4 5.99994H6Z" fill="white"/>
						</svg>
						<p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро
						   заполнить
						   макеты.</p>
					</label>
					{error && <em className={styles.Form__error}>{error}</em>}
				</Fragment>
			);
		
		case 'text':
			return (
				<Fragment>
					<label
						className={`${styles.Input} ${styles.Input_text} ${filter ? styles.Input_filter : ''} ${error ? styles.Input__error : ''}`}
					>
						<div>
							<i>{title}</i>
							<input {...props} type={htmlType}/>
						</div>
					</label>
					{error && <em className={styles.Form__error}>{error}</em>}
				</Fragment>
			);
		
		default:
			return (
				<input type="text"/>
			);
	}
};

const Checkbox = ({label, alt = false, ...props}) => {
	return (
		<label className={`${styles.Checkbox} ${alt ? styles.Checkbox_alt : ''}`}>
			<input {...props} type="checkbox"/>
			<span>{label}</span>
		</label>
	);
};

const Radio = ({value, ...props}) => {
	return (
		<label className={styles.Radio}>
			<input {...props} type="radio" value={value}/>
			<span>{value}</span>
		</label>
	);
};

const Form = {
	Option,
	Select,
	Input,
	Checkbox,
	Radio,
};

export default Form;
