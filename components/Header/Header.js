import {createRef, useEffect, useState} from 'react';
import Button from '../Button/Button';
import RegionSelect from '../RegionSelect/RegionSelect';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({isActiveMenu, setIsActiveMenu, setHeaderHeight, ...props}) => {
	const [isLogin] = useState(false);
	
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
					<RegionSelect/>
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
