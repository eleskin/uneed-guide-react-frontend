import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
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
	const {asPath} = router;
	const [date, setDate] = useState(new Date(Date.parse(value.toString())));
	const [currentDate, setCurrentDate] = useState(`${date.getDate().toString().length === 2 ? date.getDate() : `0${date.getDate()}`}-${date.getMonth().toString().length === 2 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}-${date.getFullYear()}`);
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
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
		setTimeout(() => setIsVisibleCalendar(true), 0);
	};
	
	const searchRef = createRef();
	
	useOutsideClickHandler(searchRef, isVisibleCalendar, setIsVisibleCalendar);
	
	const russianCities = {
		'moscow': 'Москве',
		'st.petersburg': 'Санкт-Петербургу',
		'murmansk': 'Мурманску',
	};
	
	const [activeCity, setActiveCity] = useState('Москве');
	
	useEffect(() => {
		if (router.locale === 'ru' && router.query['city']) {
			setActiveCity(russianCities[router.query['city']]);
		} else if (router.locale !== 'ru' && router.query['city']) {
			const cityNameSplit = router.query['city'].split('.') || router.query['city'];
			
			let capitalizedCityName = '';
			cityNameSplit.forEach((city, index) => {
				capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
			});
			
			setActiveCity(capitalizedCityName);
		} else if (router.locale === 'ru' && !router.query['city']) {
			setActiveCity(russianCities[selectedCity?.['internationalName']?.toLowerCase()]);
		} else if (router.locale !== 'ru' && !router.query['city']) {
			const cityNameSplit = selectedCity?.['internationalName']?.toLowerCase().split('.') || selectedCity?.['internationalName']?.toLowerCase();
			
			let capitalizedCityName = '';
			cityNameSplit?.forEach((city, index) => {
				capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
			});
			
			setActiveCity(capitalizedCityName);
		}
	}, [router.locale, router.query, setActiveCity, russianCities]);
	
	return (
		<div className={styles.FirstScreen}>
			<header className={styles.FirstScreen__header}>
				<div className={styles.FirstScreen__languages}>
					<Link href={asPath} locale="ru">
						<a
							className={`${styles.FirstScreen__language} ${router.locale === 'ru' ? styles.FirstScreen__language_active : ''}`}
						>
							RU
						</a>
					</Link>
					<Link href={asPath} locale="en">
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
				<span>{languageFile?.['first-screen']?.['subtitle']}</span>
				<h1>{languageFile?.['first-screen']?.['title']} {activeCity}</h1>
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
					/>
					<Image src="/assets/images/first-screen/first-screen-calendar.svg" width={15} height={14} alt=""/>
					<Button.Primary small={true}>{languageFile?.['first-screen']?.['search-button']}</Button.Primary>
				</label>
			</div>
			<UpcomingExcursions/>
		</div>
	);
};

export default FirstScreen;
