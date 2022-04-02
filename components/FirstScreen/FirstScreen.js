import {useState} from 'react';
import Button from '../Button/Button';
import styles from './FirstScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const FirstScreen = () => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth().toString().length === 2 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`;
	const currentDate = today.getDate().toString().length === 2 ? today.getDate() : `0${today.getDate()}`;
	const [date, setDate] = useState(`${currentYear}-${currentMonth}-${currentDate}`);
	
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
					<div className={styles.FirstScreen__region}>
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
							<Button.Primary small={true}>Да, верно</Button.Primary>
							<Button.Outlined small={true}>Нет, другой</Button.Outlined>
						</footer>
					</div>
				</div>
			</header>
			<div className={styles.FirstScreen__title}>
				<span>Дольше путешествие - больше открытий</span>
				<h1>Экскурсии и туры с лучшими гидами по Москве</h1>
			</div>
			<div className={styles.FirstScreen__search}>
				<label>
					<input type="date" value={date} onChange={event => setDate(event.target.value)}/>
					<Button.Primary small={true}>Найти</Button.Primary>
				</label>
			</div>
		</div>
	);
};

export default FirstScreen;
