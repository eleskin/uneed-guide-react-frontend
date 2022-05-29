import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {useState, Fragment, useEffect, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsActiveFilter} from '../../store/slices';
import Form from '../../ui/Form/Form';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import Container from '../Container/Container';
import styles from './Filter.module.scss';

const Filter = ({headerHeight, isActiveFilter, optionsSelectList, sortBy, setSortBy}) => {
	const router = useRouter();
	const [city, setCity] = useState();
	const [dateValue, setDateValue] = useState(new Date());
	const [date, setDate] = useState(format(new Date(Date.parse(dateValue.toString())), 'dd.MM.yyyy'));
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	const [lowerPrice, setLowerPrice] = useState();
	const [higherPrice, setHigherPrice] = useState();
	const [languageFile, setLanguageFile] = useState();
	const [duration, setDuration] = useState(languageFile?.['filter']?.['durations']?.['under-60-min']);
	const [type, setType] = useState(languageFile?.['filter']?.['types']?.['double-deck']);
	const dispatch = useDispatch();
	const cities = useSelector((state) => state['geolocationSlice']['cities']);
	const citiesTranslates = useSelector((state) => state['geolocationSlice']['citiesTranslates']);
	
	const citiesList = Array.from(cities)?.map((city, index) => (
		<Form.Option
			value={router.locale === 'ru' ? citiesTranslates[city['internationalName'].toLowerCase()] : city['internationalName']}
			key={index}
		>
			{router.locale === 'ru' ? citiesTranslates[city['internationalName'].toLowerCase()] : city['internationalName']}
		</Form.Option>
	));
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		setCity(router.locale === 'ru' ? citiesTranslates[Array.from(cities)[0]?.['internationalName'].toLowerCase()] : Array.from(cities)[0]?.['internationalName']);
	}, [setCity, cities, router.locale]);
	
	useEffect(() => {
		setDate(format(new Date(Date.parse(dateValue.toString())), 'dd.MM.yyyy'));
	}, [dateValue]);
	
	const handleChangeDateInput = (event) => {
		setDateValue(event);
	};
	
	const handleFocusDateInput = (event) => {
		event.target.blur();
		setTimeout(() => setIsVisibleCalendar(true), 0);
	};
	
	const calendarRef = createRef();
	
	useOutsideClickHandler(calendarRef, isVisibleCalendar, setIsVisibleCalendar);
	
	return (
		<div
			className={`${styles.Filter} ${isActiveFilter ? styles.Filter_active : ''}`}
			style={{height: `calc(100vh - ${headerHeight}px - 48.9px)`}}
		>
			<Container>
				<header className={styles.Filter__header}>
					<span>{languageFile?.['filter']?.['title']}</span>
					<button onClick={() => dispatch(setIsActiveFilter(false))}></button>
				</header>
				<div className={styles.Filter__grid}>
					<div className={styles.Filter__group}>
						<Form.Select
							value={sortBy}
							callback={setSortBy}
							title={languageFile?.['filter']?.['sort-title']}
							filter={true}
						>
							<Fragment>
								{optionsSelectList}
							</Fragment>
						</Form.Select>
						<Form.Select
							value={city}
							callback={setCity}
							title={languageFile?.['filter']?.['city-title']}
							filter={true}
						>
							<Fragment>
								{citiesList}
							</Fragment>
						</Form.Select>
						<div className={styles.Filter__date} ref={calendarRef}>
							<Form.Input
								title={languageFile?.['filter']?.['date-title']}
								type="date"
								value={dateValue}
								inputValue={date}
								onInput={handleChangeDateInput}
								onChange={handleChangeDateInput}
								onFocus={handleFocusDateInput}
								filter={true}
							/>
						</div>
						<Form.Input
							type="range"
							filter={true}
							value={lowerPrice}
							onInput={(event) => setLowerPrice(event.target.value)}
							inputTopValue={higherPrice}
							handleInputTop={(event) => setHigherPrice(event.target.value)}
						/>
					</div>
					<div className={styles.Filter__group}>
						<div className={styles.Filter__item}>
							<span>{languageFile?.['filter']?.['duration-title']}</span>
							<div>
								<Form.Radio
									value={languageFile?.['filter']?.['durations']?.['under-60-min']}
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === languageFile?.['filter']?.['durations']?.['under-60-min']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['durations']?.['under-2-hours']}
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === languageFile?.['filter']?.['durations']?.['under-2-hours']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['durations']?.['under-3-hours']}
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === languageFile?.['filter']?.['durations']?.['under-3-hours']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['durations']?.['under-5-hours']}
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === languageFile?.['filter']?.['durations']?.['under-5-hours']}
								/>
							</div>
						</div>
						<div className={styles.Filter__item}>
							<span>{languageFile?.['filter']?.['type-title']}</span>
							<div>
								<Form.Radio
									value={languageFile?.['filter']?.['types']?.['double-deck']}
									onChange={(event) => setType(event.target.value)}
									checked={type === languageFile?.['filter']?.['types']?.['double-deck']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['types']?.['boats']}
									onChange={(event) => setType(event.target.value)}
									checked={type === languageFile?.['filter']?.['types']?.['boats']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['types']?.['meteor']}
									onChange={(event) => setType(event.target.value)}
									checked={type === languageFile?.['filter']?.['types']?.['meteor']}
								/>
								<Form.Radio
									value={languageFile?.['filter']?.['types']?.['single-deck']}
									onChange={(event) => setType(event.target.value)}
									checked={type === languageFile?.['filter']?.['types']?.['single-deck']}
								/>
							</div>
						</div>
						<div className={styles.Filter__item}>
							<span>{languageFile?.['filter']?.['facilities-title']}</span>
							<div>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['toilet']}/>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['guide']}/>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['plaids']}/>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['closed-deck']}/>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['music']}/>
								<Form.Checkbox label={languageFile?.['filter']?.['facilities']?.['bar']}/>
							</div>
						</div>
					</div>
					<div className={styles.Filter__group}>
						<Button.Primary>{languageFile?.['filter']?.['text-button']}</Button.Primary>
					</div>
				</div>
			</Container>
			<footer className={styles.Filter__footer}>
				<button onClick={() => dispatch(setIsActiveFilter(!isActiveFilter))}>
					<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="2" width="19" height="1" fill="#F0515D"/>
						<rect y="9" width="19" height="1" fill="#F0515D"/>
						<rect x="4.5" y="0.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
						<rect x="11.5" y="7.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
					</svg>
					{!isActiveFilter ?
						languageFile?.['filter']?.['text-closed-button'] :
						languageFile?.['filter']?.['text-opened-button']
					}
				</button>
				{isActiveFilter && (
					<button>
						{languageFile?.['filter']?.['text-button']}
					</button>
				)}
				<button>
					<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect y="2" width="19" height="1" fill="#F0515D"/>
						<rect y="9" width="19" height="1" fill="#F0515D"/>
						<rect x="4.5" y="0.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
						<rect x="11.5" y="7.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
					</svg>
					{!isActiveFilter ?
						languageFile?.['filter']?.['text-closed-button'] :
						languageFile?.['filter']?.['text-opened-button']
					}
				</button>
			</footer>
		</div>
	);
};

export default Filter;
