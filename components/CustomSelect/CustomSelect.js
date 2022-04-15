import styles from './CustomSelect.module.scss';
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

export const Option = ({children, value, isActive, callback}) => (
	<span className={`${styles.Option} ${isActive ? styles.Option_active : ''}`} onClick={callback.bind(this, value)}>
		{children}
	</span>
);

export const CustomSelect = ({children, value, callback, small = false, ...props}) => {
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
			className={`
				${styles.CustomSelect}
				${isActive ? styles.CustomSelect_active : ''}
				${small ? styles.CustomSelect_small : ''}
			`}
			onClick={(event) => {
				event.target?.focus();
				setIsActive(!isActive);
			}}
			onKeyDown={handleKeyDownSelect}
			onBlur={setIsActive.bind(this, false)}
			tabIndex={0}
			ref={selectRef}
		>
			<div className={styles.CustomSelect__title}>
				<span>{value}</span>
				<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L3 3L5 1" stroke="#25282B" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			</div>
			<div
				className={`${styles.CustomSelect__options} ${isActive ? styles.CustomSelect__options_active : ''}`}
			>
				{childrenListWithProps}
			</div>
		</div>
	);
};
