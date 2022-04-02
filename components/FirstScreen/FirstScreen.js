import styles from './FirstScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const FirstScreen = () => {
	return (
		<div className={styles.FirstScreen}>
			<header className={styles.FirstScreen__header}>
				<div className={styles.FirstScreen__languages}>
					<Link href="#">
						<a className={`${styles.FirstScreen__language} ${styles.FirstScreen__language_active}`}>RU</a>
					</Link>
					<Link href="#">
						<a className={styles.FirstScreen__language}>EN</a>
					</Link>
				</div>
				<div className={styles.FirstScreen__location}>
					<Image
						src="/assets/images/first-screen/first-screen-map-pin.svg"
						width={15}
						height={15}
						alt=""
					/>
					<span>г. Москва</span>
					<i>(Ваш регион)</i>
				</div>
			</header>
			<div className={styles.FirstScreen__title}>
				<span>Дольше путешествие - больше открытий</span>
				<h1>Экскурсии и туры с лучшими гидами по Москве</h1>
			</div>
		</div>
	);
};

export default FirstScreen;
