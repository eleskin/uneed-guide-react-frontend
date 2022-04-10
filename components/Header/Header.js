import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Button from '../Button/Button';
import RegionSelect from '../RegionSelect/RegionSelect';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({isActiveMenu, setIsActiveMenu, headerHeight, setHeaderHeight, ...props}) => {
	const [isLogin] = useState(false);
	const router = useRouter();
	const {asPath} = router;
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity)
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	const handleButtonClick = () => {
		setTimeout(() => {
			setIsActiveMenu(!isActiveMenu);
		}, 0);
	};
	
	const handleButtonClickDesktop = () => handleButtonClick();
	
	const handleButtonClickMobile = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		handleButtonClick();
	};
	
	const headerRef = createRef();
	
	useEffect(() => {
		if (headerRef.current instanceof Element) {
			setHeaderHeight(parseFloat(window.getComputedStyle(headerRef.current).height));
		}
	}, [headerRef, setHeaderHeight]);
	
	const russianCities = {
		'moscow': 'Москве',
		'st.petersburg': 'Санкт-Петербургу',
		'murmansk': 'Мурманску',
	};
	
	const [activeCity, setActiveCity] = useState('Москве');
	
	useEffect(() => {
		if (router.locale === 'ru' && router.query['city']) {
			setActiveCity(russianCities[router.query['city']]);
		} else if (router.locale !== 'ru' && router.query['city']) {
			const cityNameSplit = router.query['city'].split('.') || router.query['city'];

			let capitalizedCityName = '';
			cityNameSplit.forEach((city, index) => {
				capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
			});

			setActiveCity(capitalizedCityName);
		} else if (router.locale === 'ru' && !router.query['city']) {
			setActiveCity(russianCities[selectedCity?.['internationalName']?.toLowerCase()]);
		} else if (router.locale !== 'ru' && !router.query['city']) {
			const cityNameSplit = selectedCity?.['internationalName']?.toLowerCase().split('.') ||selectedCity?.['internationalName']?.toLowerCase();
			
			let capitalizedCityName = '';
			cityNameSplit?.forEach((city, index) => {
				capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
			});
			
			setActiveCity(capitalizedCityName);
		}
	}, [router.locale, router.query, setActiveCity, russianCities]);
	
	return (
		<header
			{...props}
			className={`${styles.Header} ${isActiveMenu ? styles.Header_active : ''}`}
			ref={headerRef}
		>
			<div className={styles.Header__top}>
				<div className={styles.Header__container}>
					<RegionSelect mode="header"/>
					<div className={styles.Header__menu}>
						<ul>
							<li>
								<Link href="#"><a>{languageFile?.['header']?.['header-top']?.['header-help-link']}</a></Link>
							</li>
							<li>
								<Link href="#"><a>{languageFile?.['header']?.['header-top']?.['header-terms-link']}</a></Link>
							</li>
							<li>
								<Link href="#"><a>{languageFile?.['header']?.['header-top']?.['header-cooperation-link']}</a></Link>
							</li>
							<li>
								<Link href="#"><a>{languageFile?.['header']?.['header-top']?.['header-contacts-link']}</a></Link>
							</li>
						</ul>
						<div className={styles.Header__languages}>
							<Link href={asPath} locale="ru">
								<a
									className={`${styles.Header__language} ${router.locale === 'ru' ? styles.Header__language_active : ''}`}
								>
									RU
								</a>
							</Link>
							<Link href={asPath} locale="en">
								<a
									className={`${styles.Header__language} ${router.locale === 'en' ? styles.Header__language_active : ''}`}
								>
									EN
								</a>
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
							<Button.Outlined small={true} onClick={handleButtonClickDesktop}>
								{languageFile?.['header']?.['header-main']?.['header-catalog-button']}
							</Button.Outlined>
							<label>
								<Image src="/assets/images/header/header-search.svg" width={18} height={18} alt=""/>
								<input
									type="text"
									placeholder={
										`${languageFile?.['header']?.['header-main']?.['header-placeholder-input']} ${activeCity}`
									}
								/>
							</label>
						</div>
						<div className={styles.Header__right}>
							<div className={styles.Header__links}>
								<Link href="#">
									<a>
										<Image src="/assets/images/header/header-cart.svg" width={17} height={14} alt=""/>
										<span>{languageFile?.['header']?.['header-main']?.['header-cart-link']}</span>
									</a>
								</Link>
								<Link href="#">
									<a>
										<Image src="/assets/images/header/header-heart.svg" width={17} height={14} alt=""/>
										<span>{languageFile?.['header']?.['header-main']?.['header-favorites-link']}</span>
									</a>
								</Link>
								{isLogin ? (
									<Link href="#">
										<a>
											<Image src="/assets/images/header/header-profile.svg" width={17} height={14} alt=""/>
											<span>{languageFile?.['header']?.['header-main']?.['header-profile-link']}</span>
										</a>
									</Link>
								) : (
									<Button.Outlined small={true}>{languageFile?.['header']?.['header-main']?.['header-login-button']}</Button.Outlined>
								)}
							</div>
						</div>
					</div>
					<button
						className={styles.Header__button}
						onClick={handleButtonClickMobile}
					>
						<span/>
						<span/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
