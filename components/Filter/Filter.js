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
				</div>
			</Container>
		</div>
	);
};

export default Filter;
