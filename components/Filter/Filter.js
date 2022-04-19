import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {useState, Fragment, useEffect, createRef} from 'react';
import Calendar from 'react-calendar';
import Form from '../../ui/Form/Form';
import {useOutsideClickHandler} from '../../utils/hooks';
import Container from '../Container/Container';
import styles from './Filter.module.scss';

const Filter = () => {
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
		<div className={styles.Filter}>
			<Container>
				<div className={styles.Filter__grid}>
					<div className={styles.Filter__group}>
						<Form.Select value={category} callback={setCategory} title="Категория" filter={true}>
							<Fragment>
								<Form.Option value="По рейтингу">По рейтингу</Form.Option>
								<Form.Option value="По популярности">По популярности</Form.Option>
								<Form.Option value="По цене">По цене</Form.Option>
							</Fragment>
						</Form.Select>
						<Form.Select value={city} callback={setCity} title="Категория" filter={true}>
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
					</div>
					<div className={styles.Filter__group}>
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
				</div>
			</Container>
		</div>
	);
};

export default Filter;
