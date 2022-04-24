import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {useState, Fragment, useEffect, createRef} from 'react';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {setIsActiveFilter} from '../../store/slices';
import Form from '../../ui/Form/Form';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import Container from '../Container/Container';
import styles from './Filter.module.scss';

const Filter = ({headerHeight, isActiveFilter}) => {
	const router = useRouter();
	const [category, setCategory] = useState();
	const [city, setCity] = useState();
	const [dateValue, setDateValue] = useState(new Date());
	const [date, setDate] = useState(format(new Date(Date.parse(dateValue.toString())), 'dd.MM-=.yyyy'));
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	const [lowerPrice, setLowerPrice] = useState();
	const [higherPrice, setHigherPrice] = useState();
	const [duration, setDuration] = useState('до 60 мин');
	const [type, setType] = useState('Двухпалубные теплоходы');
	const dispatch = useDispatch();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		setDate(format(new Date(Date.parse(dateValue.toString())), 'dd.MM.yyyy'));
	}, [dateValue]);
	
	const handleChangeDateInput = (event) => {
		event.preventDefault();
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
						<Form.Select value={category} callback={setCategory} title="Категория" filter={true}>
							<Fragment>
								<Form.Option value="По рейтингу">По рейтингу</Form.Option>
								<Form.Option value="По популярности">По популярности</Form.Option>
								<Form.Option value="По цене">По цене</Form.Option>
							</Fragment>
						</Form.Select>
						<Form.Select value={city} callback={setCity} title="Город" filter={true}>
							<Fragment>
								<Form.Option value="Москва">Москва</Form.Option>
								<Form.Option value="Санкт-Петербург">Санкт-Петербург</Form.Option>
								<Form.Option value="Мурманск">Мурманск</Form.Option>
							</Fragment>
						</Form.Select>
						<div className={styles.Filter__date} ref={calendarRef}>
							<Form.Input
								title="Дата"
								type="date"
								value={date}
								onInput={handleChangeDateInput}
								onChange={handleChangeDateInput}
								onFocus={handleFocusDateInput}
								filter={true}
							/>
							<div className={`${styles.Filter__calendar} ${isVisibleCalendar ? styles.Filter__calendar_active : ''}`}>
								<Calendar
									locale={router.locale}
									value={dateValue}
									onChange={setDateValue}
									onClickDay={() => setIsVisibleCalendar(false)}
								/>
							</div>
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
							<span>Продолжительность</span>
							<div>
								<Form.Radio
									value="до 60 мин"
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === 'до 60 мин'}
								/>
								<Form.Radio
									value="от 1 до 2 часов"
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === 'от 1 до 2 часов'}
								/>
								<Form.Radio
									value="от 2 до 3 часов"
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === 'от 2 до 3 часов'}
								/>
								<Form.Radio
									value="от 4 до 5 часов"
									onChange={(event) => setDuration(event.target.value)}
									checked={duration === 'от 4 до 5 часов'}
								/>
							</div>
						</div>
						<div className={styles.Filter__item}>
							<span>Тип судна</span>
							<div>
								<Form.Radio
									value="Двухпалубные теплоходы"
									onChange={(event) => setType(event.target.value)}
									checked={type === 'Двухпалубные теплоходы'}
								/>
								<Form.Radio
									value="Катера"
									onChange={(event) => setType(event.target.value)}
									checked={type === 'Катера'}
								/>
								<Form.Radio
									value="Метеоры"
									onChange={(event) => setType(event.target.value)}
									checked={type === 'Метеоры'}
								/>
								<Form.Radio
									value="Однопалубные теплоходы"
									onChange={(event) => setType(event.target.value)}
									checked={type === 'Однопалубные теплоходы'}
								/>
							</div>
						</div>
						<div className={styles.Filter__item}>
							<span>Удобства на борту</span>
							<div>
								<Form.Checkbox label="Туалет"/>
								<Form.Checkbox label="Экскурсовод"/>
								<Form.Checkbox label="Пледы"/>
								<Form.Checkbox label="Закрытая палуба"/>
								<Form.Checkbox label="Музыка на борту"/>
								<Form.Checkbox label="Бар"/>
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
