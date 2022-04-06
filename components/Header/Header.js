import {createRef, useEffect, useState} from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({isActiveMenu, setIsActiveMenu, setHeaderHeight, ...props}) => {
	const [isLogin] = useState(false);
	const [isVisibleRegionSelector, setIsVisibleRegionSelector] = useState(true);
	
	const handleButtonCloseClick = () => {
		setIsVisibleRegionSelector(false);
	};
	
	const handleButtonOpenClick = () => {
		setIsVisibleRegionSelector(true);
	};
	
	const handleButtonClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setTimeout(() => {
			setIsActiveMenu(!isActiveMenu);
		}, 0);
	};
	
	const headerRef = createRef();
	
	useEffect(() => {
		if (headerRef.current instanceof Element) {
			setHeaderHeight(parseFloat(window.getComputedStyle(headerRef.current).height));
		}
	}, [headerRef, setHeaderHeight]);

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
			<div className={styles.Header__top}>
				<div className={styles.Header__container}>
					<div className={styles.Header__location}>
						<div onClick={handleButtonOpenClick}>
							<Image
								src="/assets/images/first-screen/first-screen-map-pin.svg"
								width={15}
								height={15}
								alt=""
							/>
							<span>г. Москва</span>
							<i>(Ваш регион)</i>
						</div>
						<div
							className={`${styles.Header__region} ${isVisibleRegionSelector ? styles.Header__region_active : ''}`}
						>
							<header>
								<Image
									src="/assets/images/first-screen/first-screen-map-pin.svg"
									width={15}
									height={15}
									alt=""
								/>
								<span>Ваш регион Москва?</span>
							</header>
							<footer>
								<Button.Primary small={true} onClick={handleButtonCloseClick}>Да, верно</Button.Primary>
								<Button.Outlined small={true} onClick={handleButtonCloseClick}>Нет, другой</Button.Outlined>
							</footer>
						</div>
					</div>
					<div className={styles.Header__menu}>
						<ul>
							<li>
								<Link href="#"><a>Помощь</a></Link>
							</li>
							<li>
								<Link href="#"><a>Условия оплаты и возврата</a></Link>
							</li>
							<li>
								<Link href="#"><a>Сотрудничество</a></Link>
							</li>
							<li>
								<Link href="#"><a>Контакты</a></Link>
							</li>
						</ul>
						<div className={styles.Header__languages}>
							<Link href="#">
								<a className={`${styles.Header__language} ${styles.Header__language_active}`}>RU</a>
							</Link>
							<Link href="#">
								<a className={styles.Header__language}>EN</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.Header__main}>
				<div className={styles.Header__container}>
					<Link href="/">
						<a>
						<span className={styles.Header__logo}>
							<Image
								src="/assets/images/header/header-logo.svg"
								width={30}
								height={36}
								alt=""
							/>
						</span>
							<span className={styles.Header__logo_desktop}>
							<Image
								src="/assets/images/header/header-logo-desktop.svg"
								width={200}
								height={39}
								alt=""
							/>
						</span>
						</a>
					</Link>
					<div className={styles.Header__desktop}>
						<div className={styles.Header__center}>
							<Button.Outlined small={true} onClick={handleButtonClick}>Каталог</Button.Outlined>
							<label>
								<Image src="/assets/images/header/header-search.svg" width={18} height={18} alt=""/>
								<input type="text" placeholder="Поиск по Москве"/>
							</label>
						</div>
						<div className={styles.Header__right}>
							<div className={styles.Header__links}>
								<Link href="#">
									<a>
										<Image src="/assets/images/header/header-cart.svg" width={17} height={14} alt=""/>
										<span>Корзина</span>
									</a>
								</Link>
								<Link href="#">
									<a>
										<Image src="/assets/images/header/header-heart.svg" width={17} height={14} alt=""/>
										<span>Избранное</span>
									</a>
								</Link>
								{isLogin ? (
									<Link href="#">
										<a>
											<Image src="/assets/images/header/header-profile.svg" width={17} height={14} alt=""/>
											<span>Профиль</span>
										</a>
									</Link>
								) : (
									<Button.Outlined small={true}>Вход или регистрация</Button.Outlined>
								)}
							</div>
						</div>
					</div>
					<button
						className={styles.Header__button}
						onClick={handleButtonClick}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
