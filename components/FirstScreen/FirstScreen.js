import {createRef, useEffect, useState} from 'react';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import UpcomingExcursions from '../UpcomingExcursions/UpcomingExcursions';
import styles from './FirstScreen.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';

const FirstScreen = () => {
	const today = new Date();
	const [isVisibleRegionSelector, setIsVisibleRegionSelector] = useState(true);
	
	const handleButtonCloseClick = () => {
		setIsVisibleRegionSelector(false);
	};
	
	const handleButtonOpenClick = () => {
		setIsVisibleRegionSelector(true);
	};
	
	const defaultValue = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
	};
	
	const [selectedDay, setSelectedDay] = useState(defaultValue);
	
	const [date, setDate] = useState(
		`${selectedDay.day.toString().length === 2 ? selectedDay.day : `0${selectedDay.day}`}-${selectedDay.month.toString().length === 2 ? selectedDay.month : `0${selectedDay.month}`}-${selectedDay.year}`,
	);
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	
	const handleChangeInput = (event) => {
		event.preventDefault();
	};
	
	const handleFocusInput = () => {
		setIsVisibleCalendar(true);
	};
	
	const handleSelectData = (date) => {
		setIsVisibleCalendar(false);
		setSelectedDay(date);
	};
	
	useEffect(() => {
		setDate(`${selectedDay.day.toString().length === 2 ? selectedDay.day : `0${selectedDay.day}`}-${selectedDay.month.toString().length === 2 ? selectedDay.month : `0${selectedDay.month}`}-${selectedDay.year}`);
	}, [selectedDay]);
	
	const searchRef = createRef();
	
	useOutsideClickHandler(searchRef, isVisibleCalendar, setIsVisibleCalendar);
	
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
						className={`${styles.FirstScreen__region} ${isVisibleRegionSelector ? styles.FirstScreen__region_active : ''}`}
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
			</header>
			<div className={styles.FirstScreen__title}>
				<span>Дольше путешествие - больше открытий</span>
				<h1>Экскурсии и туры с лучшими гидами по Москве</h1>
			</div>
			<div className={styles.FirstScreen__search} ref={searchRef}>
				<div className={`${styles.FirstScreen__calendar} ${isVisibleCalendar ? styles.FirstScreen__calendar_active : ''}`}>
					<Calendar value={selectedDay} onChange={handleSelectData} colorPrimary="#f0515d"/>
				</div>
				<label>
					<input
						type="text"
						value={date}
						onInput={handleChangeInput}
						onChange={handleChangeInput}
						onFocus={handleFocusInput}
					/>
					<Image src="/assets/images/first-screen/first-screen-calendar.svg" width={15} height={14}/>
					<Button.Primary small={true}>Найти</Button.Primary>
				</label>
			</div>
			<UpcomingExcursions/>
		</div>
	);
};

export default FirstScreen;
