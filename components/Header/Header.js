import {createRef, useEffect} from 'react';
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
			<button
				className={styles.Header__button}
				onClick={handleButtonClick}
			/>
		</header>
	);
};

export default Header;
