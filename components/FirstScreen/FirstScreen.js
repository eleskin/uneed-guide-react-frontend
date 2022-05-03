import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAll} from '../../store/slices/mainPage';
import {getCityName} from '../../utils/functions';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import RegionSelect from '../RegionSelect/RegionSelect';
import UpcomingExcursions from '../UpcomingExcursions/UpcomingExcursions';
import styles from './FirstScreen.module.scss';
import Link from 'next/link';
import Calendar from 'react-calendar';

const FirstScreen = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [value, onChange] = useState(new Date());
	const [currentLocale, setCurrentLocale] = useState('ru');
	const {asPath} = router;
	const [currentDate, setCurrentDate] = useState(format(new Date(Date.parse(value.toString())), 'dd-MM-yyyy'));
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		setCurrentDate(format(new Date(Date.parse(value.toString())), 'dd-MM-yyyy'));
	}, [value]);
	
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
	
	const [activeCity, setActiveCity] = useState('Москве');
	
	useEffect(() => {
		setActiveCity(getCityName(selectedCity, router, 'dative'));
	}, [router, selectedCity]);
	
	useEffect(() => {
		dispatch(getAll());
	}, []);
	
	return (
		<div className={styles.FirstScreen}>
			<div className={styles.FirstScreen__container}>
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
							<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.8334 1.77783H16.9446C17.4968 1.77783 17.9446 2.22555 17.9446 2.77783V15.0001C17.9446 15.5523 17.4968 16.0001 16.9446 16.0001H2.05566C1.50338 16.0001 1.05566 15.5523 1.05566 15.0001V2.77783C1.05566 2.22555 1.50338 1.77783 2.05566 1.77783H3.16678M11.6112 1.77783H9.50011H7.389" stroke="#F0515D" strokeWidth="0.5"/>
								<rect x="4.61133" width="0.888889" height="3.55556" rx="0.444444" fill="#F0515D"/>
								<rect x="13.5" width="0.888889" height="3.55556" rx="0.444444" fill="#F0515D"/>
							</svg>
							<Button.Primary small={true}>{languageFile?.['first-screen']?.['search-button']}</Button.Primary>
						</label>
					</div>
				</div>
				<UpcomingExcursions/>
			</div>
		</div>
	);
};

export default FirstScreen;
