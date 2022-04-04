import {createRef, useEffect, useState} from 'react';
import {Calendar} from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {useSwipeable} from 'react-swipeable';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import styles from './UpcomingExcursions.module.scss';
import Image from 'next/image';

const UpcomingExcursions = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [maxCardHeight, setMaxCardHeight] = useState(0);
	
	const slides = [
		{},
		{},
		{},
		{},
	];
	
	let interval;
	
	useEffect(() => {
		interval = setInterval(() => {
			activeSlide < slides.length - 1 ? setActiveSlide(activeSlide + 1) : setActiveSlide(0);
		}, 4500);
		
		return () => clearInterval(interval);
	}, [activeSlide]);
	
	const dotsList = slides.map((slide, index) => (
		<div
			className={`${styles.UpcomingExcursions__dot} ${activeSlide === index ? styles.UpcomingExcursions__dot_active : ''}`}
			key={index}
		>
			<span/>
		</div>
	));
	
	const handleSelectData = (date) => {
		setIsVisibleCalendar(false);
		setSelectedDay(date);
	};
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	
	const handleCalendarButtonClick = () => {
		clearInterval(interval);
		setIsVisibleCalendar(true);
	};
	
	const today = new Date();
	
	const defaultValue = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
	};
	
	const [selectedDay, setSelectedDay] = useState(defaultValue);
	
	const [, setDate] = useState(
		`${selectedDay.day.toString().length === 2 ? selectedDay.day : `0${selectedDay.day}`}-${selectedDay.month.toString().length === 2 ? selectedDay.month : `0${selectedDay.month}`}-${selectedDay.year}`,
	);
	
	useEffect(() => {
		setDate(`${selectedDay.day.toString().length === 2 ? selectedDay.day : `0${selectedDay.day}`}-${selectedDay.month.toString().length === 2 ? selectedDay.month : `0${selectedDay.month}`}-${selectedDay.year}`);
	}, [selectedDay]);
	
	const cardsRef = createRef();
	
	useOutsideClickHandler(cardsRef, isVisibleCalendar, setIsVisibleCalendar);
	
	const cardsList = slides.map((slide, index) => (
		<div
			className={`${styles.UpcomingExcursions__card} ${activeSlide === index ? styles.UpcomingExcursions__card_active : ''}`}
			key={index}
		>
			<div className={styles.UpcomingExcursions__image}>
				<Image
					src="/assets/images/upcoming-excursions/upcoming-excursions-image-1.png"
					width={288}
					height={160}
					layout="responsive"
					alt=""
				/>
			</div>
			<header className={styles.UpcomingExcursions__header}>
				<h3>Экскурсия по Москва-реке {index + 1}</h3>
				<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-clock.svg"
							width={14}
							height={14}
							alt=""
						/>
						1ч. 30 мин.
					</span>
				<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-crosshair.svg"
							width={14}
							height={14}
							alt=""
						/>
						Причал  “Мост Ломоносова”
					</span>
				<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-departure.svg"
							width={14}
							height={14}
							alt=""
						/>
						Каждые 30 мин.
					</span>
			</header>
			<div className={styles.UpcomingExcursions__departures}>
				<span>Ближайшие отправления:</span>
				<div className={styles.UpcomingExcursions__times}>
					<button>12:45</button>
					<button>14:25</button>
					<button>16:25</button>
					<button onClick={handleCalendarButtonClick}>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-calendar.svg"
							width={16}
							height={14}
							alt=""
						/>
					</button>
				</div>
				<div
					className={`${styles.UpcomingExcursions__calendar} ${isVisibleCalendar ? styles.UpcomingExcursions__calendar_active : ''}`}
				>
					<Calendar value={selectedDay} onChange={handleSelectData} colorPrimary="#f0515d"/>
				</div>
			</div>
			<div className={styles.UpcomingExcursions__discount}>
				<Image
					src="/assets/images/upcoming-excursions/upcoming-excursions-percent.svg"
					width={14}
					height={14}
					alt=""
				/>
				<strong>От 350 ₽</strong>
				<span>450 ₽</span>
			</div>
			<div className={styles.UpcomingExcursions__tariffs}>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>Взрослый</span>
					<div>
						<strong>450 ₽</strong>
						<span>550 ₽</span>
						<button>
							<Image
								src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
								width={14}
								height={14}
								alt=""
							/>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>Детский</span>
					<div>
						<strong>350 ₽</strong>
						<span>450 ₽</span>
						<button>
							<Image
								src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
								width={14}
								height={14}
								alt=""
							/>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>Взрослый (с ланчем)</span>
					<div>
						<strong>480 ₽</strong>
						<span>580 ₽</span>
						<button>
							<Image
								src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
								width={14}
								height={14}
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<footer className={styles.UpcomingExcursions__footer}>
				<Button.Primary
					small={true}
					style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
				>
					Купить
				</Button.Primary>
				<Button.Outlined
					small={true}
					style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
				>
					Подробнее
				</Button.Outlined>
				<Button.Outlined
					small={true}
					style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}
				>
					<Image
						src="/assets/images/upcoming-excursions/upcoming-excursions-heart.svg"
						width={16}
						height={16}
						alt=""
					/>
				</Button.Outlined>
			</footer>
		</div>
	));
	
	useEffect(() => {
		for (const card of cardsRef.current.children) {
			const height = parseFloat(window.getComputedStyle(card).height);
			if (height > maxCardHeight) {
				setMaxCardHeight(height);
			}
		}
	}, []);
	
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			if (cardsRef.current) {
				for (const card of cardsRef.current.children) {
					const height = parseFloat(window.getComputedStyle(card).height);
					if (height) {
						setMaxCardHeight(height);
					}
				}
			}
		});
	}
	
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1);
		},
		onSwipedRight: () => {
			activeSlide > 0 && setActiveSlide(activeSlide - 1);
		},
	});
	
	return (
		<div className={styles.UpcomingExcursions} {...handlers}>
			<header className={styles.UpcomingExcursions__header}>
				<span>Ближайшие экскурсии</span>
				<div className={styles.UpcomingExcursions__loader}>{dotsList}</div>
			</header>
			<div
				className={styles.UpcomingExcursions__cards}
				ref={cardsRef}
				style={{height: maxCardHeight + 8}}
			>
				{cardsList}
			</div>
		</div>
	);
};

export default UpcomingExcursions;
