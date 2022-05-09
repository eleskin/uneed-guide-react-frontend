import {useRouter} from 'next/router';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
	const router = useRouter();
	
	return (
		<nav className={styles.Navbar}>
			<div className={styles.Navbar__container}>
				<Link href="/">
					<a
						className={`${styles.Navbar__link} ${router.pathname === '/' ? styles.Navbar__link_active : ''}`}
					>
						<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.5769 9.0184V16.2503H12.1896H11.371V12.6473C11.371 12.0674 10.9009 11.5973 10.321 11.5973H7.78371C7.20382 11.5973 6.73371 12.0674 6.73371 12.6473V16.2503H5.91509H3.52783V8.866L9.04508 4.26845L14.5769 9.0184ZM3.09338 8.67385L3.07785 8.65522L3.09338 8.67385Z" stroke="#D3D3D3" strokeWidth="1.5"/>
							<path d="M1 7.8571C1 7.8571 8.53778 1 8.82222 1C9.10667 1 14.3926 5.5714 17 7.8571" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
						<span>Главная</span>
					</a>
				</Link>
				<Link href="#">
					<a className={styles.Navbar__link}>
						<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.1886 7.52947C14.1886 11.1275 11.2444 14.0589 7.59431 14.0589C3.94427 14.0589 1 11.1275 1 7.52947C1 3.93141 3.94427 1 7.59431 1C11.2444 1 14.1886 3.93141 14.1886 7.52947Z" stroke="#D3D3D3" strokeWidth="2"/>
							<path d="M12.5786 11.9492L16.6649 16.0001" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round"/>
						</svg>
						<span>Каталог</span>
					</a>
				</Link>
				<Link href="#">
					<a className={styles.Navbar__link}>
						<svg width="17" height="17" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.68182 14.9998C7.05838 14.9998 7.36364 14.7014 7.36364 14.3332C7.36364 13.965 7.05838 13.6665 6.68182 13.6665C6.30526 13.6665 6 13.965 6 14.3332C6 14.7014 6.30526 14.9998 6.68182 14.9998Z" stroke="#D3D3D3" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M13.9548 14.9998C14.3313 14.9998 14.6366 14.7014 14.6366 14.3332C14.6366 13.965 14.3313 13.6665 13.9548 13.6665C13.5782 13.6665 13.2729 13.965 13.2729 14.3332C13.2729 14.7014 13.5782 14.9998 13.9548 14.9998Z" stroke="#D3D3D3" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M1 1H3.72727L5.55455 9.92667C5.61689 10.2336 5.78766 10.5093 6.03696 10.7055C6.28626 10.9018 6.5982 11.006 6.91818 11H13.5455C13.8654 11.006 14.1774 10.9018 14.4267 10.7055C14.676 10.5093 14.8467 10.2336 14.9091 9.92667L16 4.33333H4.40909" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<span>Корзина</span>
					</a>
				</Link>
				<Link href="#">
					<a className={styles.Navbar__link}>
						<svg width="19" height="17" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.6891 2.2377C16.2738 1.84531 15.7806 1.53404 15.2377 1.32168C14.6949 1.10931 14.1131 1 13.5255 1C12.9379 1 12.3561 1.10931 11.8133 1.32168C11.2704 1.53404 10.7772 1.84531 10.3619 2.2377L9.49978 3.05166L8.63771 2.2377C7.79866 1.44548 6.66066 1.00041 5.47407 1.00041C4.28747 1.00041 3.14947 1.44548 2.31042 2.2377C1.47137 3.02993 1 4.10441 1 5.22479C1 6.34516 1.47137 7.41965 2.31042 8.21187L3.1725 9.02583L9.49978 15L15.8271 9.02583L16.6891 8.21187C17.1047 7.81967 17.4344 7.354 17.6593 6.84146C17.8842 6.32893 18 5.77958 18 5.22479C18 4.67 17.8842 4.12064 17.6593 3.60811C17.4344 3.09558 17.1047 2.6299 16.6891 2.2377V2.2377Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<span>Избранное</span>
					</a>
				</Link>
				<Link href="/profile">
					<a className={`${styles.Navbar__link} ${router.pathname === '/profile' ? styles.Navbar__link_active : ''}`}>
						<svg width="18" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.7998 17V14.9804C1.7998 14.0535 2.1791 13.1644 2.85422 12.509C3.52936 11.8536 4.44502 11.4854 5.39981 11.4854H8.9998H12.5998C13.5546 11.4854 14.4702 11.8536 15.1454 12.509C15.8205 13.1644 16.1998 14.0535 16.1998 14.9804V17" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M8.9999 7.99013C10.9881 7.99013 12.5999 6.42552 12.5999 4.49507C12.5999 2.56461 10.9881 1 8.9999 1C7.01168 1 5.3999 2.56461 5.3999 4.49507C5.3999 6.42552 7.01168 7.99013 8.9999 7.99013Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<span>Профиль</span>
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
