import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({isActiveMenu, setIsActiveMenu, ...props}) => {
	
	const handleButtonClick = () => {
		setIsActiveMenu(!isActiveMenu);
	};
	
	return (
		<header {...props} className={`${styles.Header} ${isActiveMenu ? styles.Header_active : ''}`}>
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
