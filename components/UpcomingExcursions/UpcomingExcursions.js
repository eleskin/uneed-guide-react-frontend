import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import {useSwipeable} from 'react-swipeable';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import styles from './UpcomingExcursions.module.scss';
import Image from 'next/image';

const UpcomingExcursions = () => {
	const router = useRouter();
	const [value, onChange] = useState(new Date());
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
		}, 5000);
		
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
		<div
			className={styles.UpcomingExcursions__card}
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
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.6">
								<path d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00008 1.16663C3.77842 1.16663 1.16675 3.7783 1.16675 6.99996C1.16675 10.2216 3.77842 12.8333 7.00008 12.8333Z" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7 3.5V7L9.33333 8.16667" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
							</g>
						</svg>
						1ч. 30 мин.
					</span>
				<span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.6">
								<path d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00008 1.16663C3.77842 1.16663 1.16675 3.7783 1.16675 6.99996C1.16675 10.2216 3.77842 12.8333 7.00008 12.8333Z" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M12.8333 7H10.5" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M3.50008 7H1.16675" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7 3.49996V1.16663" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7 12.8333V10.5" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
							</g>
						</svg>
						Причал  “Мост Ломоносова”
					</span>
				<span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.6" d="M7.00008 12.6667C10.2217 12.6667 12.8334 10.055 12.8334 6.83333C12.8334 3.61167 10.2217 1 7.00008 1C3.77842 1 1.16675 3.61167 1.16675 6.83333C1.16675 10.055 3.77842 12.6667 7.00008 12.6667Z" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
							<g opacity="0.6">
								<path d="M8 9L10 7L8 5" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M5 9L7 7L5 5" stroke="#212121" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
							</g>
						</svg>
						Каждые 30 мин.
					</span>
			</header>
			<div className={styles.UpcomingExcursions__departures}>
				<span>{languageFile?.['upcoming-excursions']?.['nearest-departures']}:</span>
				<div className={styles.UpcomingExcursions__times}>
					<button>12:45</button>
					<button>14:25</button>
					<button>16:25</button>
					<button onClick={handleCalendarButtonClick}>
						<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.8334 1.77783H16.9446C17.4968 1.77783 17.9446 2.22555 17.9446 2.77783V15.0001C17.9446 15.5523 17.4968 16.0001 16.9446 16.0001H2.05566C1.50338 16.0001 1.05566 15.5523 1.05566 15.0001V2.77783C1.05566 2.22555 1.50338 1.77783 2.05566 1.77783H3.16678M11.6112 1.77783H9.50011H7.389" stroke="#F0515D" strokeWidth="0.5"/>
							<rect x="4.61133" width="0.888889" height="3.55556" rx="0.444444" fill="#F0515D"/>
							<rect x="13.5" width="0.888889" height="3.55556" rx="0.444444" fill="#F0515D"/>
						</svg>
					</button>
				</div>
				<div
					className={`${styles.UpcomingExcursions__calendar} ${isVisibleCalendar ? styles.UpcomingExcursions__calendar_active : ''}`}
				>
					<Calendar
						locale={currentLocale}
						value={value}
						onChange={onChange}
						onClickDay={() => setIsVisibleCalendar(false)}
					/>
				</div>
			</div>
			<div className={styles.UpcomingExcursions__discount}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15" stroke="#F0515D" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M5.59766 8.71387C5.41536 8.71387 5.25911 8.7041 5.12891 8.68457C4.9987 8.66504 4.86686 8.63086 4.7334 8.58203C4.60319 8.52995 4.47624 8.45833 4.35254 8.36719C4.22884 8.27604 4.11979 8.15723 4.02539 8.01074C3.81706 7.68848 3.71289 7.26855 3.71289 6.75098C3.71289 5.7972 4.05957 5.17708 4.75293 4.89062C4.9873 4.79297 5.19889 4.74414 5.3877 4.74414C5.5765 4.74414 5.736 4.75391 5.86621 4.77344C5.99967 4.78971 6.13151 4.82389 6.26172 4.87598C6.39518 4.9248 6.52376 4.99479 6.64746 5.08594C6.77116 5.17708 6.88184 5.29753 6.97949 5.44727C7.18783 5.76953 7.29199 6.2041 7.29199 6.75098C7.29199 7.65592 6.94368 8.25651 6.24707 8.55273C5.99967 8.66016 5.7832 8.71387 5.59766 8.71387ZM6.32031 6.75098C6.32031 5.84928 6.04688 5.39844 5.5 5.39844C4.95638 5.39844 4.68457 5.84928 4.68457 6.75098C4.68457 7.42155 4.84733 7.83659 5.17285 7.99609C5.27376 8.04492 5.38281 8.06934 5.5 8.06934C5.62044 8.06934 5.72949 8.04492 5.82715 7.99609C5.92806 7.94727 6.01595 7.86914 6.09082 7.76172C6.24382 7.54036 6.32031 7.20345 6.32031 6.75098ZM8.78613 10.9307C8.73079 10.7256 8.70312 10.4831 8.70312 10.2031C8.70312 9.91992 8.73242 9.67415 8.79102 9.46582C8.84961 9.25749 8.92773 9.08008 9.02539 8.93359C9.12305 8.78385 9.23372 8.66178 9.35742 8.56738C9.48438 8.46973 9.61296 8.39323 9.74316 8.33789C9.97754 8.24023 10.1891 8.19141 10.3779 8.19141C10.57 8.19141 10.7311 8.20117 10.8613 8.2207C10.9948 8.23698 11.1266 8.27116 11.2568 8.32324C11.3903 8.37207 11.5173 8.44206 11.6377 8.5332C11.7614 8.62435 11.8721 8.74479 11.9697 8.89453C12.1781 9.22331 12.2822 9.65788 12.2822 10.1982C12.2822 11.1064 11.9355 11.707 11.2422 12C10.9948 12.1074 10.7409 12.1611 10.4805 12.1611C9.57878 12.1611 9.014 11.751 8.78613 10.9307ZM11.3154 10.1982C11.3154 9.29655 11.042 8.8457 10.4951 8.8457C9.94824 8.8457 9.6748 9.29655 9.6748 10.1982C9.6748 10.8688 9.83919 11.2839 10.168 11.4434C10.2689 11.4922 10.3779 11.5166 10.4951 11.5166C10.6156 11.5166 10.7246 11.4922 10.8223 11.4434C10.9232 11.3945 11.0094 11.3164 11.0811 11.209C11.2373 10.9876 11.3154 10.6507 11.3154 10.1982ZM9.75781 4.92969C9.91406 4.91341 10.0508 4.94922 10.168 5.03711C10.3861 5.19987 10.4593 5.33659 10.3877 5.44727L6.16895 11.9854C5.99316 11.9788 5.85156 11.9333 5.74414 11.8486C5.54232 11.6989 5.47233 11.5719 5.53418 11.4678L9.75781 4.92969Z" fill="#F0515D"/>
				</svg>
				<strong>От 350 ₽</strong>
				<span>450 ₽</span>
			</div>
			<div className={styles.UpcomingExcursions__tariffs}>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>{languageFile?.['upcoming-excursions']?.['adult-ticket']}</span>
					<div>
						<strong>450 ₽</strong>
						<span>550 ₽</span>
						<button>
							<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.33335 15C6.70154 15 7.00002 14.7015 7.00002 14.3334C7.00002 13.9652 6.70154 13.6667 6.33335 13.6667C5.96516 13.6667 5.66669 13.9652 5.66669 14.3334C5.66669 14.7015 5.96516 15 6.33335 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M13.6667 15C14.0349 15 14.3333 14.7015 14.3333 14.3334C14.3333 13.9652 14.0349 13.6667 13.6667 13.6667C13.2985 13.6667 13 13.9652 13 14.3334C13 14.7015 13.2985 15 13.6667 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M1 1H3.66667L5.45333 9.92667C5.5143 10.2336 5.68127 10.5093 5.92503 10.7055C6.16879 10.9018 6.4738 11.006 6.78667 11H13.2667C13.5795 11.006 13.8845 10.9018 14.1283 10.7055C14.3721 10.5093 14.539 10.2336 14.6 9.92667L15.6667 4.33333H4.33333" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>{languageFile?.['upcoming-excursions']?.['child-ticket']}</span>
					<div>
						<strong>350 ₽</strong>
						<span>450 ₽</span>
						<button>
							<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.33335 15C6.70154 15 7.00002 14.7015 7.00002 14.3334C7.00002 13.9652 6.70154 13.6667 6.33335 13.6667C5.96516 13.6667 5.66669 13.9652 5.66669 14.3334C5.66669 14.7015 5.96516 15 6.33335 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M13.6667 15C14.0349 15 14.3333 14.7015 14.3333 14.3334C14.3333 13.9652 14.0349 13.6667 13.6667 13.6667C13.2985 13.6667 13 13.9652 13 14.3334C13 14.7015 13.2985 15 13.6667 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M1 1H3.66667L5.45333 9.92667C5.5143 10.2336 5.68127 10.5093 5.92503 10.7055C6.16879 10.9018 6.4738 11.006 6.78667 11H13.2667C13.5795 11.006 13.8845 10.9018 14.1283 10.7055C14.3721 10.5093 14.539 10.2336 14.6 9.92667L15.6667 4.33333H4.33333" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__tariff}>
					<span>{languageFile?.['upcoming-excursions']?.['adult-lunch-ticket']}</span>
					<div>
						<strong>480 ₽</strong>
						<span>580 ₽</span>
						<button>
							<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.33335 15C6.70154 15 7.00002 14.7015 7.00002 14.3334C7.00002 13.9652 6.70154 13.6667 6.33335 13.6667C5.96516 13.6667 5.66669 13.9652 5.66669 14.3334C5.66669 14.7015 5.96516 15 6.33335 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M13.6667 15C14.0349 15 14.3333 14.7015 14.3333 14.3334C14.3333 13.9652 14.0349 13.6667 13.6667 13.6667C13.2985 13.6667 13 13.9652 13 14.3334C13 14.7015 13.2985 15 13.6667 15Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M1 1H3.66667L5.45333 9.92667C5.5143 10.2336 5.68127 10.5093 5.92503 10.7055C6.16879 10.9018 6.4738 11.006 6.78667 11H13.2667C13.5795 11.006 13.8845 10.9018 14.1283 10.7055C14.3721 10.5093 14.539 10.2336 14.6 9.92667L15.6667 4.33333H4.33333" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<footer className={styles.UpcomingExcursions__footer}>
				<Button.Primary
					small={true}
					style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
				>
					{languageFile?.['upcoming-excursions']?.['buy-button']}
				</Button.Primary>
				<Button.Outlined
					small={true}
					style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
				>
					{languageFile?.['upcoming-excursions']?.['more-button']}
				</Button.Outlined>
				<Button.Outlined
					small={true}
					style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}
				>
					<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6891 2.82611C16.2738 2.40569 15.7806 2.07219 15.2377 1.84465C14.6949 1.61711 14.1131 1.5 13.5255 1.5C12.9379 1.5 12.3561 1.61711 11.8133 1.84465C11.2704 2.07219 10.7772 2.40569 10.3619 2.82611L9.49978 3.69821L8.63771 2.82611C7.79866 1.9773 6.66066 1.50044 5.47407 1.50044C4.28747 1.50044 3.14947 1.9773 2.31042 2.82611C1.47137 3.67492 1 4.82616 1 6.02656C1 7.22696 1.47137 8.37819 2.31042 9.227L3.1725 10.0991L9.49978 16.5L15.8271 10.0991L16.6891 9.227C17.1047 8.80679 17.4344 8.30785 17.6593 7.75871C17.8842 7.20957 18 6.62097 18 6.02656C18 5.43214 17.8842 4.84355 17.6593 4.2944C17.4344 3.74526 17.1047 3.24633 16.6891 2.82611V2.82611Z" stroke="#F0515D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Button.Outlined>
			</footer>
		</div>
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
			>
				<div className={styles.UpcomingExcursions__container} style={{transform: `translateX(${-100 * activeSlide}%)`}}>
					{cardsList}
				</div>
			</div>
		</div>
	);
};

export default UpcomingExcursions;
