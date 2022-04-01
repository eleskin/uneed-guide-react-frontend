import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={styles.Header}>
			<Link href="/">
				<a className={styles.Header__logo}>
					<Image src="/assets/images/header/header-logo.svg" width={30} height={36}/>
				</a>
			</Link>
			<button className={styles.Header__button}/>
		</header>
	);
};

export default Header;
