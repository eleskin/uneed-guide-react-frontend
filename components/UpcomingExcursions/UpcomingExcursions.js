import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import {useOutsideClickHandler} from '../../utils/hooks';
import ExcursionCard from '../ExcursionCard/ExcursionCard';
import styles from './UpcomingExcursions.module.scss';

const UpcomingExcursions = () => {
	const router = useRouter();
	const [dateValue, setDateValue] = useState(new Date());
	const [activeSlide, setActiveSlide] = useState(0);
	const [isChangedSlide, setIsChangedSlide] = useState(true);
	const [currentLocale, setCurrentLocale] = useState('ru');
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		if (router.locale) {
			setCurrentLocale(router.locale);
		}
	}, [router.locale]);
	
	const slides = [
		{},
		{},
		{},
		{},
	];
	
	useEffect(() => {
		const interval = setInterval(() => {
			if (isChangedSlide) {
				activeSlide < slides.length - 1 ? setActiveSlide(activeSlide + 1) : setActiveSlide(0);
			}
		}, 10000);
		
		return () => clearInterval(interval);
	}, [activeSlide, isChangedSlide, slides.length]);
	
	const dotsList = slides.map((slide, index) => (
		<div
			className={`${styles.UpcomingExcursions__dot} ${activeSlide === index ? styles.UpcomingExcursions__dot_active : ''}`}
			key={index}
		>
			<span/>
		</div>
	));
	
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	
	const handleCalendarButtonClick = () => {
		if (isVisibleCalendar) {
			setIsChangedSlide(true);
			setIsVisibleCalendar(false);
		} else {
			setIsChangedSlide(false);
			setIsVisibleCalendar(true);
		}
	};
	
	const cardsRef = createRef();
	
	useOutsideClickHandler(cardsRef, isVisibleCalendar, setIsVisibleCalendar);
	
	const cardsList = slides.map((slide, index) => (
		<ExcursionCard
			languageFile={languageFile}
			currentLocale={currentLocale}
			dateValue={dateValue}
			setDateValue={setDateValue}
			handleCalendarButtonClick={handleCalendarButtonClick}
			isVisibleCalendar={isVisibleCalendar}
			setIsVisibleCalendar={setIsVisibleCalendar}
			key={index}
		/>
	));
	
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (!isVisibleCalendar) {
				activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1);
			}
		},
		onSwipedRight: () => {
			if (!isVisibleCalendar) {
				activeSlide > 0 && setActiveSlide(activeSlide - 1);
			}
		},
	});
	
	return (
		<div className={styles.UpcomingExcursions} {...handlers}>
			<header className={styles.UpcomingExcursions__header}>
				<span>{languageFile?.['upcoming-excursions']?.['nearest-excursions']}</span>
				<div className={styles.UpcomingExcursions__loader}>{dotsList}</div>
			</header>
			<div
				className={styles.UpcomingExcursions__cards}
				ref={cardsRef}
				onMouseMove={() => isChangedSlide && setIsChangedSlide(false)}
				onMouseLeave={() => !isChangedSlide && !isVisibleCalendar && setIsChangedSlide(true)}
			>
				<div className={styles.UpcomingExcursions__navigation}>
					<h4>
						{languageFile?.['upcoming-excursions']?.['nearest-excursions']}
					</h4>
					<div>
						<button
							className={styles.UpcomingExcursions__button}
							onClick={() => setActiveSlide(activeSlide - 1)}
							disabled={activeSlide <= 0}
						>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M0 6L6.48649 12L8 10.6L3.02703 6L8 1.4L6.48649 0L0 6Z" fill="#F0515D"/>
							</svg>
						</button>
						<button
							className={styles.UpcomingExcursions__button}
							onClick={() => setActiveSlide(activeSlide + 1)}
							disabled={activeSlide >= slides.length - 1}
						>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M8 6L1.51351 12L2.54528e-07 10.6L4.97297 6L2.54528e-07 1.4L1.51351 0L8 6Z" fill="#F0515D"/>
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__container} style={{transform: `translateX(${-100 * activeSlide}%)`}}>
					{cardsList}
				</div>
			</div>
		</div>
	);
};

export default UpcomingExcursions;
