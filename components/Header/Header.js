import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsActiveAuthorizationModal} from '../../store/slices';
import {getCityName} from '../../utils/functions';
import Button from '../Button/Button';
import RegionSelect from '../RegionSelect/RegionSelect';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = ({isActiveMenu, setIsActiveMenu, headerHeight, setHeaderHeight, ...props}) => {
	const isAuth = useSelector((state) => state['userSlice']['isAuth']);
	const router = useRouter();
	const dispatch = useDispatch();
	const {asPath} = router;
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	
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
	
	const [activeCity, setActiveCity] = useState('Москве');
	
	useEffect(() => {
		setActiveCity(getCityName(selectedCity, router, 'dative'));
	}, [router, selectedCity]);
	
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
						{/* <div className={styles.Header__languages}> */}
						{/* 	<Link href={asPath} locale="ru"> */}
						{/* 		<a */}
						{/* 			className={`${styles.Header__language} ${router.locale === 'ru' ? styles.Header__language_active : ''}`} */}
						{/* 		> */}
						{/* 			RU */}
						{/* 		</a> */}
						{/* 	</Link> */}
						{/* 	<Link href={asPath} locale="en"> */}
						{/* 		<a */}
						{/* 			className={`${styles.Header__language} ${router.locale === 'en' ? styles.Header__language_active : ''}`} */}
						{/* 		> */}
						{/* 			EN */}
						{/* 		</a> */}
						{/* 	</Link> */}
						{/* </div> */}
					</div>
				</div>
			</div>
			<div className={styles.Header__main}>
				<div className={styles.Header__container}>
					<Link href="/">
						<a>
						<span className={styles.Header__logo}>
							<svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.0311 27.7335C22.1867 30.4832 18.7733 31.8579 14.7911 31.8579C10.714 31.8579 7.22965 30.4119 4.33767 27.5202C1.44599 24.6283 0 21.1439 0 17.0668V2.27563C0 1.64985 0.222951 1.11416 0.668548 0.668566C1.11414 0.222969 1.64983 1.90735e-05 2.27561 1.90735e-05C2.90138 1.90735e-05 3.43707 0.222969 3.88267 0.668566C4.32826 1.11416 4.55121 1.64985 4.55121 2.27563V17.0668C4.55121 19.8923 5.5513 22.3053 7.55209 24.3058C9.55257 26.3066 11.9656 27.3067 14.7911 27.3067C17.6167 27.3067 20.0297 26.3066 22.0302 24.3058C24.031 22.3053 25.0311 19.8923 25.0311 17.0668" fill="#F0515D"/>
								<path d="M5.06494 7.77533C7.9093 5.02561 11.3227 3.6509 15.3049 3.6509C19.382 3.6509 22.8664 5.09689 25.7583 7.98856C28.65 10.8805 30.096 14.3649 30.096 18.442V33.2332C30.096 33.859 29.8731 34.3946 29.4275 34.8402C28.9819 35.2858 28.4462 35.5088 27.8204 35.5088C27.1946 35.5088 26.6589 35.2858 26.2133 34.8402C25.7677 34.3946 25.5448 33.859 25.5448 33.2332V18.442C25.5448 15.6165 24.5447 13.2035 22.5439 11.203C20.5434 9.20221 18.1304 8.20211 15.3049 8.20211C12.4793 8.20211 10.0663 9.20221 8.06582 11.203C6.06503 13.2035 5.06494 15.6165 5.06494 18.442" fill="#F0515D"/>
							</svg>
						</span>
							<span className={styles.Header__logo_desktop}>
							<svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M27.5067 31.2122C24.381 34.2323 20.63 35.7422 16.254 35.7422C11.7737 35.7422 7.94467 34.154 4.76667 30.978C1.589 27.8017 0 23.9748 0 19.4968V3.2514C0 2.56409 0.245001 1.97574 0.734668 1.48634C1.22433 0.996929 1.813 0.752056 2.50067 0.752056C3.18833 0.752056 3.777 0.996929 4.26667 1.48634C4.75633 1.97574 5.00133 2.56409 5.00133 3.2514V19.4968C5.00133 22.6001 6.10033 25.2504 8.299 27.4476C10.4973 29.6451 13.149 30.7435 16.254 30.7435C19.359 30.7435 22.0107 29.6451 24.209 27.4476C26.4077 25.2504 27.5067 22.6001 27.5067 19.4968" fill="#F0515D"/>
								<path d="M5.56641 9.29176C8.69207 6.27169 12.4431 4.76182 16.8191 4.76182C21.2994 4.76182 25.1284 6.34998 28.3064 9.52596C31.4841 12.7023 33.0731 16.5293 33.0731 21.0072V37.2526C33.0731 37.9399 32.8281 38.5283 32.3384 39.0177C31.8487 39.5071 31.2601 39.752 30.5724 39.752C29.8847 39.752 29.2961 39.5071 28.8064 39.0177C28.3167 38.5283 28.0717 37.9399 28.0717 37.2526V21.0072C28.0717 17.9039 26.9727 15.2536 24.7741 13.0564C22.5757 10.8589 19.9241 9.76051 16.8191 9.76051C13.7141 9.76051 11.0624 10.8589 8.86407 13.0564C6.6654 15.2536 5.56641 17.9039 5.56641 21.0072" fill="#F0515D"/>
								<path d="M57.2161 14.6332H54.3734V22.2845C54.3734 24.8018 53.0021 26.0978 50.9074 26.0978C48.8378 26.0978 47.4661 24.8018 47.4661 22.2845V14.6332H44.6484V22.7083C44.6484 26.5463 47.0921 28.5652 50.3088 28.5652C51.9298 28.5652 53.4758 27.8922 54.3734 26.7208V28.3656H57.2161V14.6332Z" fill="#F0515D"/>
								<path d="M70.707 28.3655H73.525V20.2658C73.525 16.4275 71.106 14.4089 67.8894 14.4089C66.2437 14.4089 64.7224 15.0819 63.7997 16.2033V14.6331H60.957V28.3655H63.7997V20.6895C63.7997 18.1722 65.1714 16.8762 67.266 16.8762C69.3357 16.8762 70.707 18.1722 70.707 20.6895V28.3655Z" fill="#F0515D"/>
								<path d="M82.926 16.8019C85.0457 16.8019 86.7164 18.1475 86.7664 20.2661H79.1607C79.46 18.0979 81.006 16.8019 82.926 16.8019ZM89.3597 24.2786H86.2923C85.7687 25.3504 84.7963 26.1976 83.0507 26.1976C80.956 26.1976 79.3354 24.827 79.1357 22.5589H89.6337C89.7087 22.0855 89.7337 21.6367 89.7337 21.1633C89.7337 17.1258 86.9657 14.4092 83.0507 14.4092C78.986 14.4092 76.1934 17.1757 76.1934 21.4871C76.1934 25.7988 79.111 28.5903 83.0507 28.5903C86.417 28.5903 88.5863 26.671 89.3597 24.2786Z" fill="#F0515D"/>
								<path d="M98.3111 16.8019C100.43 16.8019 102.101 18.1475 102.151 20.2661H94.5458C94.8448 18.0979 96.3908 16.8019 98.3111 16.8019ZM104.744 24.2786H101.677C101.154 25.3504 100.181 26.1976 98.4358 26.1976C96.3411 26.1976 94.7201 24.827 94.5208 22.5589H105.019C105.093 22.0855 105.118 21.6367 105.118 21.1633C105.118 17.1258 102.35 14.4092 98.4358 14.4092C94.3711 14.4092 91.5781 17.1757 91.5781 21.4871C91.5781 25.7988 94.4958 28.5903 98.4358 28.5903C101.802 28.5903 103.971 26.671 104.744 24.2786Z" fill="#F0515D"/>
								<path d="M106.965 21.4375C106.965 25.6742 109.833 28.5903 113.448 28.5903C115.693 28.5903 117.338 27.5436 118.211 26.2972V28.3658H121.079V9.92324H118.211V16.5524C117.164 15.2564 115.269 14.4092 113.473 14.4092C109.833 14.4092 106.965 17.2004 106.965 21.4375ZM118.211 21.4871C118.211 24.4532 116.191 26.123 114.047 26.123C111.927 26.123 109.882 24.4032 109.882 21.4375C109.882 18.4717 111.927 16.8766 114.047 16.8766C116.191 16.8766 118.211 18.5463 118.211 21.4871Z" fill="#F0515D"/>
								<path d="M127.761 26.7209C127.761 25.6991 126.963 24.9016 125.965 24.9016C124.943 24.9016 124.145 25.6991 124.145 26.7209C124.145 27.7427 124.943 28.5403 125.965 28.5403C126.963 28.5403 127.761 27.7427 127.761 26.7209Z" fill="#F0515D"/>
								<path d="M129.881 21.4374C129.881 25.6741 132.749 28.5902 136.364 28.5902C138.609 28.5902 140.254 27.4685 141.127 26.2971V28.5902C141.127 31.3318 139.481 32.6774 137.287 32.6774C135.317 32.6774 133.796 31.7056 133.372 30.285H130.554C130.903 33.3254 133.621 35.1448 137.287 35.1448C141.576 35.1448 143.995 32.3286 143.995 28.5902V14.6333H141.127V16.6273C140.279 15.4559 138.609 14.4091 136.364 14.4091C132.749 14.4091 129.881 17.2003 129.881 21.4374ZM141.127 21.487C141.127 24.4531 139.107 26.1229 136.963 26.1229C134.843 26.1229 132.799 24.4031 132.799 21.4374C132.799 18.4716 134.843 16.8765 136.963 16.8765C139.107 16.8765 141.127 18.5462 141.127 21.487Z" fill="#F0515D"/>
								<path d="M160.177 14.6332H157.334V22.2845C157.334 24.8018 155.963 26.0978 153.868 26.0978C151.798 26.0978 150.427 24.8018 150.427 22.2845V14.6332H147.609V22.7083C147.609 26.5463 150.053 28.5652 153.27 28.5652C154.891 28.5652 156.437 27.8922 157.334 26.7208V28.3656H160.177V14.6332Z" fill="#F0515D"/>
								<path d="M163.917 28.3655H166.76V14.6331H163.917V28.3655ZM165.363 12.8137C166.361 12.8137 167.159 12.0161 167.159 10.9943C167.159 9.97256 166.361 9.17498 165.363 9.17498C164.341 9.17498 163.543 9.97256 163.543 10.9943C163.543 12.0161 164.341 12.8137 165.363 12.8137Z" fill="#F0515D"/>
								<path d="M169.553 21.4375C169.553 25.6742 172.42 28.5903 176.036 28.5903C178.28 28.5903 179.926 27.5436 180.799 26.2972V28.3658H183.666V9.92324H180.799V16.5524C179.751 15.2564 177.856 14.4092 176.061 14.4092C172.42 14.4092 169.553 17.2004 169.553 21.4375ZM180.799 21.4871C180.799 24.4532 178.779 26.123 176.634 26.123C174.515 26.123 172.47 24.4032 172.47 21.4375C172.47 18.4717 174.515 16.8766 176.634 16.8766C178.779 16.8766 180.799 18.5463 180.799 21.4871Z" fill="#F0515D"/>
								<path d="M193.192 16.8019C195.311 16.8019 196.982 18.1475 197.032 20.2661H189.426C189.726 18.0979 191.272 16.8019 193.192 16.8019ZM199.625 24.2786H196.558C196.035 25.3504 195.062 26.1976 193.316 26.1976C191.222 26.1976 189.601 24.827 189.402 22.5589H199.9C199.974 22.0855 199.999 21.6367 199.999 21.1633C199.999 17.1258 197.231 14.4092 193.316 14.4092C189.252 14.4092 186.459 17.1757 186.459 21.4871C186.459 25.7988 189.377 28.5903 193.316 28.5903C196.683 28.5903 198.852 26.671 199.625 24.2786Z" fill="#F0515D"/>
							</svg>
						</span>
						</a>
					</Link>
					<div className={styles.Header__desktop}>
						<div className={styles.Header__center}>
							<Button.Outlined small={true} onClick={handleButtonClickDesktop}>
								{languageFile?.['header']?.['header-main']?.['header-catalog-button']}
							</Button.Outlined>
							<label>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M15.7498 15.7498L12.4873 12.4873" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
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
								<Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/order`}>
									<a>
										<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.68182 14.9998C7.05838 14.9998 7.36364 14.7014 7.36364 14.3332C7.36364 13.965 7.05838 13.6665 6.68182 13.6665C6.30526 13.6665 6 13.965 6 14.3332C6 14.7014 6.30526 14.9998 6.68182 14.9998Z" stroke="#D3D3D3" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M13.9548 14.9998C14.3313 14.9998 14.6366 14.7014 14.6366 14.3332C14.6366 13.965 14.3313 13.6665 13.9548 13.6665C13.5782 13.6665 13.2729 13.965 13.2729 14.3332C13.2729 14.7014 13.5782 14.9998 13.9548 14.9998Z" stroke="#D3D3D3" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M1 1H3.72727L5.55455 9.92667C5.61689 10.2336 5.78766 10.5093 6.03696 10.7055C6.28626 10.9018 6.5982 11.006 6.91818 11H13.5455C13.8654 11.006 14.1774 10.9018 14.4267 10.7055C14.676 10.5093 14.8467 10.2336 14.9091 9.92667L16 4.33333H4.40909" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										<span>{languageFile?.['header']?.['header-main']?.['header-cart-link']}</span>
									</a>
								</Link>
								<Link href="#">
									<a>
										<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M16.6891 2.2377C16.2738 1.84531 15.7806 1.53404 15.2377 1.32168C14.6949 1.10931 14.1131 1 13.5255 1C12.9379 1 12.3561 1.10931 11.8133 1.32168C11.2704 1.53404 10.7772 1.84531 10.3619 2.2377L9.49978 3.05166L8.63771 2.2377C7.79866 1.44548 6.66066 1.00041 5.47407 1.00041C4.28747 1.00041 3.14947 1.44548 2.31042 2.2377C1.47137 3.02993 1 4.10441 1 5.22479C1 6.34516 1.47137 7.41965 2.31042 8.21187L3.1725 9.02583L9.49978 15L15.8271 9.02583L16.6891 8.21187C17.1047 7.81967 17.4344 7.354 17.6593 6.84146C17.8842 6.32893 18 5.77958 18 5.22479C18 4.67 17.8842 4.12064 17.6593 3.60811C17.4344 3.09558 17.1047 2.6299 16.6891 2.2377V2.2377Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										<span>{languageFile?.['header']?.['header-main']?.['header-favorites-link']}</span>
									</a>
								</Link>
								{isAuth ? (
									<Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/profile`}>
										<a>
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1.7998 17V14.9804C1.7998 14.0535 2.1791 13.1644 2.85422 12.509C3.52936 11.8536 4.44502 11.4854 5.39981 11.4854H8.9998H12.5998C13.5546 11.4854 14.4702 11.8536 15.1454 12.509C15.8205 13.1644 16.1998 14.0535 16.1998 14.9804V17" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												<path d="M8.99978 7.99013C10.988 7.99013 12.5998 6.42552 12.5998 4.49507C12.5998 2.56461 10.988 1 8.99978 1C7.01156 1 5.39978 2.56461 5.39978 4.49507C5.39978 6.42552 7.01156 7.99013 8.99978 7.99013Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
											<span>{languageFile?.['header']?.['header-main']?.['header-profile-link']}</span>
										</a>
									</Link>
								) : (
									<Button.Outlined
										small={true}
										onClick={() => dispatch(setIsActiveAuthorizationModal(true))}
									>
										{languageFile?.['header']?.['header-main']?.['header-login-button']}
									</Button.Outlined>
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
