import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import RegionSelect from '../RegionSelect/RegionSelect';
import UpcomingExcursions from '../UpcomingExcursions/UpcomingExcursions';
import styles from './FirstScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Calendar from 'react-calendar';

const FirstScreen = () => {
	const router = useRouter();
	const [value, onChange] = useState(new Date());
	const [currentLocale, setCurrentLocale] = useState('ru');
	
	const [date, setDate] = useState(new Date(Date.parse(value.toString())));
	const [currentDate, setCurrentDate] = useState(`${date.getDate().toString().length === 2 ? date.getDate() : `0${date.getDate()}`}-${date.getMonth().toString().length === 2 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getFullYear()}`);
	
	useEffect(() => {
		setDate(new Date(Date.parse(value.toString())));
		setCurrentDate(`${date.getDate().toString().length === 2 ? date.getDate() : `0${date.getDate()}`}-${date.getMonth().toString().length === 2 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getFullYear()}`);
	}, [date, value]);
	
	useEffect(() => {
		if (router.locale) {
			setCurrentLocale(router.locale);
		}
	}, [router.locale]);
	
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	
	const handleChangeInput = (event) => {
		event.preventDefault();
	};
	
	const handleFocusInput = (event) => {
		event.target.blur();
	};
	
	const searchRef = createRef();
	
	useOutsideClickHandler(searchRef, isVisibleCalendar, setIsVisibleCalendar);
	
	return (
		<div className={styles.FirstScreen}>
			<header className={styles.FirstScreen__header}>
				<div className={styles.FirstScreen__languages}>
					<Link href="#" locale="ru">
						<a
							className={`${styles.FirstScreen__language} ${router.locale === 'ru' ? styles.FirstScreen__language_active : ''}`}
						>
							RU
						</a>
					</Link>
					<Link href="#" locale="en">
						<a
							className={`${styles.FirstScreen__language} ${router.locale === 'en' ? styles.FirstScreen__language_active : ''}`}
						>
							EN
						</a>
					</Link>
				</div>
				<RegionSelect mode="first-screen"/>
			</header>
			<div className={styles.FirstScreen__title}>
				<span>Дольше путешествие - больше открытий</span>
				<h1>Экскурсии и туры с лучшими гидами по Москве</h1>
			</div>
			<div className={styles.FirstScreen__search} ref={searchRef}>
				<div className={`${styles.FirstScreen__calendar} ${isVisibleCalendar ? styles.FirstScreen__calendar_active : ''}`}>
					<Calendar
						locale={currentLocale}
						value={value}
						onChange={onChange}
						onClickDay={() => setIsVisibleCalendar(false)}
					/>
				</div>
				<label>
					<input
						type="text"
						value={currentDate}
						onInput={handleChangeInput}
						onChange={handleChangeInput}
						onFocus={handleFocusInput}
						onClick={() => setIsVisibleCalendar(!isVisibleCalendar)}
					/>
					<Image src="/assets/images/first-screen/first-screen-calendar.svg" width={15} height={14} alt=""/>
					<Button.Primary small={true}>Найти</Button.Primary>
				</label>
			</div>
			<UpcomingExcursions/>
		</div>
	);
};

export default FirstScreen;
