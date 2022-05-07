import {format} from 'date-fns';
import {useState} from 'react';
import styles from './WeekCalendar.module.scss';

const WeekCalendar = ({dateValue, setDateValue, currentLocale}) => {
	const date = new Date();
	const currentDay = date.getDay() === 0 ? 7 : date.getDay() + 1;
	const getNextDate = () => new Date(date.setDate(date.getDate() + 1));
	const [activeDateRow, setActiveDateRow] = useState(0);
	
	const dates = [
		new Date(date.setDate(date.getDate() - currentDay + 1)),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
		getNextDate(),
	];
	
	const datesList = dates.map((date, index) => {
		const isEqualDate = new Date(dateValue).getDate() === date.getDate() &&
			new Date(dateValue).getMonth() === date.getMonth() &&
			new Date(dateValue).getFullYear() === date.getFullYear();
		
		return (
			<button
				className={`
				${styles.WeekCalendar__date}
				${isEqualDate ? styles.WeekCalendar__date_active : ''}
			`}
				key={index}
				onClick={() => {
					setDateValue(date);
				}}
			>
				{date.getDate()}
			</button>
		);
	});
	
	const grids = datesList.reduce((grids, value, index) => {
		const gridIndex = Math.floor(index / 7);
		
		if (!grids[gridIndex]) {
			grids[gridIndex] = [];
		}
		
		grids[gridIndex].push(value);
		
		return grids;
	}, []);
	
	const gridsList = grids.map((grid, index) => (
		<div
			className={`${styles.WeekCalendar__row} ${activeDateRow === index ? styles.WeekCalendar__row_active : ''}`}
			key={index}
		>
			{grid}
		</div>
	));
	
	return (
		<div className={styles.WeekCalendar}>
			<header className={styles.WeekCalendar__header}>
				{dateValue ? <i>{format(dateValue, 'd', {locale: currentLocale})} {format(dateValue, 'MMMM', {locale: currentLocale})} - {`${format(dateValue, 'EEEE', {locale: currentLocale})[0].toUpperCase()}${format(dateValue, 'EEEE', {locale: currentLocale}).slice(1)}`}</i> : <i/>}
				<div>
					<button disabled={activeDateRow < 1} onClick={() => {
						setActiveDateRow(activeDateRow - 1);
					}}>
						<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0 3L3.24324 6L4 5.3L1.51351 3L4 0.7L3.24324 0L0 3Z" fill="white"/>
						</svg>
					</button>
					<button disabled={activeDateRow >= grids.length - 1} onClick={() => {
						setActiveDateRow(activeDateRow + 1);
					}}>
						<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M4 3L0.756757 6L1.27264e-07 5.3L2.48649 3L1.27264e-07 0.7L0.756757 0L4 3Z" fill="white"/>
						</svg>
					</button>
				</div>
			</header>
			<div className={styles.WeekCalendar__days}>
				<span>Пн</span>
				<span>Вт</span>
				<span>Ср</span>
				<span>Чт</span>
				<span>Пт</span>
				<span>Сб</span>
				<span>Вс</span>
			</div>
			<div className={styles.WeekCalendar__dates}>
				{gridsList}
			</div>
		</div>
	);
};

export default WeekCalendar;
