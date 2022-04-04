import {createRef, useEffect} from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({isActiveMenu, setIsActiveMenu, setHeaderHeight, ...props}) => {
	const handleButtonClick = () => {
		setIsActiveMenu(!isActiveMenu);
	};
	
	const headerRef = createRef();
	
	useEffect(() => {
		if (headerRef.current instanceof Element) {
			setHeaderHeight(parseFloat(window.getComputedStyle(headerRef.current).height));
		}
	}, []);
	
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			if (headerRef.current instanceof Element) {
				setHeaderHeight(parseFloat(window.getComputedStyle(headerRef.current).height));
			}
		});
	}
	
	return (
		<header
			{...props}
			className={`${styles.Header} ${isActiveMenu ? styles.Header_active : ''}`}
			ref={headerRef}
		>
			<div className={styles.Header__container}>
				<Link href="/">
					<a className={styles.Header__logo}>
						<Image
							src="/assets/images/header/header-logo.svg"
							width={30}
							height={36}
							alt=""
						/>
					</a>
				</Link>
				<div className={styles.Header__desktop}>
					<div className={styles.Header__center}>
						<Button.Outlined onClick={handleButtonClick}>Каталог</Button.Outlined>
						<input type="text"/>
					</div>
					<Button.Outlined>Вход или регистрация</Button.Outlined>
				</div>
				<button
					className={styles.Header__button}
					onClick={handleButtonClick}
				/>
			</div>
		</header>
	);
};

export default Header;
