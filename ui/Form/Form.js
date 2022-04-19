import styles from './Form.module.scss';
import {cloneElement, createRef, useEffect, useState} from 'react';

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

const Select = ({children, value, callback, title, ...props}) => {
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
				(focusableElements[nextIndex])?.focus()
			}
		}
	};
	
	return (
		<div
			{...props}
			className={`${styles.Select} ${isActive ? styles.Select_active : ''}`}
			onClick={(event) => {
				event.target?.focus();
				setIsActive(!isActive);
			}}
			onKeyDown={handleKeyDownSelect}
			onBlur={setIsActive.bind(this, false)}
			tabIndex={0}
			ref={selectRef}
		>
			<div className={styles.Select__title}>
				<div>
					<i>{title}</i>
					<span>{value}</span>
				</div>
				<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M6 8L12 2L10.6 0.6L6 5.2L1.4 0.6L0 2L6 8Z" fill="#988787"/>
				</svg>
			</div>
			<div
				className={`${styles.Select__options} ${isActive ? styles.Select__options_active : ''}`}
			>
				{childrenListWithProps}
			</div>
		</div>
	);
};

const Form = {
	Option,
	Select
};

export default Form;
