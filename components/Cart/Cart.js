import {format, isToday, isTomorrow} from 'date-fns';
import {ru} from 'date-fns/locale';
import {useRouter} from 'next/router';
import {createRef, useState} from 'react';
import Image from 'next/image';
import Calendar from 'react-calendar';
import {useOutsideClickHandler} from '../../utils/hooks';
import styles from './Cart.module.scss';
import Form from '../../ui/Form/Form';

const ticketsCountInitial = [];

const Cart = ({order, setTotalSumWithoutDiscount, setTotalSumWithDiscount, setTotalTickets}) => {
	const router = useRouter();
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	const [dateValue, setDateValue] = useState();
	const [currentJetty, setCurrentJetty] = useState('ст. м. Маяковская, театр сатиры');
	const [ticketsCount, setTicketsCount] = useState(ticketsCountInitial);
	const [total] = useState(0);
	
	const getTotal = (total, ticketsCount, tickets, field) => {
		return tickets.reduce((accumulator, ticket, index) => {
			return accumulator + ticket[field] * (ticketsCount[index] || 0);
		}, 0);
	};
	
	const [dates] = useState([
		new Date(2022, 3, 30),
		new Date(2022, 4, 1),
		new Date(2022, 4, 2),
		new Date(2022, 4, 3),
	]);
	const [activeDate, setActiveDate] = useState(dates[0]);
	const datesList = dates.map((date, index) => {
		if (index < 3) {
			return (
				<button
					className={`${styles.Cart__date} ${activeDate === date ? styles.Cart__date_active : ''}`}
					onClick={() => setActiveDate(date)}
					key={index}
				>
					<em>{isToday(date) ? 'Сегодня' : isTomorrow(date) ? 'Завтра' : format(date, 'EEEE', {locale: ru})}</em>
					<span>{format(date, 'dd MMMM', {locale: ru})}</span>
				</button>
			);
		} else if (index === 2 && dates.length === 3) {
			return (
				<button
					className={`${styles.Cart__date} ${activeDate === date ? styles.Cart__date_active : ''}`}
					onClick={() => setActiveDate(date)}
					key={index}
				>
					<em>{isToday(date) ? 'Сегодня' : isTomorrow(date) ? 'Завтра' : format(date, 'EEEE', {locale: ru})}</em>
					<span>{format(date, 'dd MMMM', {locale: ru})}</span>
				</button>
			);
		}
	});
	
	const [times] = useState([
		'12:45',
		'13:00',
		'13:15',
		'13:30',
	]);
	const [backTimes] = useState([
		'16:45',
		'17:00',
		'17:15',
		'17:30',
	]);
	const [activeTime, setActiveTime] = useState(times[0]);
	const [activeBackTime, setActiveBackTime] = useState(backTimes[0]);
	
	const datesRef = createRef();
	
	useOutsideClickHandler(datesRef, isVisibleCalendar, setIsVisibleCalendar);
	
	const tickets = order[0].tickets;
	const ticketsList = tickets.map((ticket, index) => (
		<div
			className={styles.Cart__ticket}
			key={index}
		>
			<div>
				<em>{ticket.title}</em>
				<div>
					<span>Цена 1 билета</span>
					<strong>{ticket.priceAmount} ₽</strong>
				</div>
			</div>
			<div>
				<div className={styles.Cart__select}>
					<button
						onClick={() => {
							setTotalTickets((prevState) => prevState - 1);
							ticketsCountInitial[index] = ticketsCountInitial[index] - 1;
							setTicketsCount([...ticketsCountInitial]);
							
							setTotalSumWithoutDiscount(getTotal(total, ticketsCountInitial, tickets, 'price'));
							setTotalSumWithDiscount(getTotal(total, ticketsCountInitial, tickets, 'priceAmount'));
						}}
						disabled={ticketsCount[index] <= 0}
					>
						<svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="1" width="1" height="11" rx="0.5" transform="rotate(-90 0 1)" fill="#221818"/>
						</svg>
					</button>
					<output>{ticketsCount[index] || 0}</output>
					<button
						onClick={() => {
							setTotalTickets((prevState) => prevState + 1);
							if (!ticketsCountInitial[index]) {
								ticketsCountInitial[index] = 0;
							}
							
							ticketsCountInitial[index] = ticketsCountInitial[index] + 1;
							setTicketsCount([...ticketsCountInitial]);
							
							setTotalSumWithoutDiscount(getTotal(total, ticketsCountInitial, tickets, 'price'));
							setTotalSumWithDiscount(getTotal(total, ticketsCountInitial, tickets, 'priceAmount'));
						}}
					>
						<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="5" width="1" height="11" rx="0.5" fill="#221818"/>
							<rect y="6" width="1" height="11" rx="0.5" transform="rotate(-90 0 6)" fill="#221818"/>
						</svg>
					</button>
				</div>
				<div className={styles.Cart__total} style={{color: (ticketsCount[index] === 0 || ticketsCount[index] === undefined) ? 'rgba(34 ,24 , 24, 0.6)' : ''}}>
					{(ticketsCount[index] || 0) * ticket.priceAmount} ₽
				</div>
			</div>
		</div>
	));
	
	return (
		<div className={styles.Cart}>
			<h2 className={styles.Cart__title}>Корзина</h2>
			<header className={styles.Cart__header}>
				<Image
					src="/assets/images/upcoming-excursions/upcoming-excursions-image-1.png"
					width={90}
					height={58}
					alt=""
					className={styles.Cart__image}
				/>
				<div>
					<h4>Экскурсия по Москва-реке</h4>
					<span>Групповая экскурсия</span>
				</div>
			</header>
			<div className={styles.Cart__supplier}>
				Услугу предоставляет <em>Нева Тревел</em>
			</div>
			<div className={styles.Cart__form}>
				<h3>Выберите место начала отправления</h3>
				<div className={styles.Cart__radio}>
					<Form.Radio
						value="ст. м. Маяковская, театр сатиры"
						checked={currentJetty === 'ст. м. Маяковская, театр сатиры'}
						onChange={(event) => setCurrentJetty(event.target.value)}
					/>
					<Form.Radio
						value="ст. м. Таганская, у 3 входа метро"
						checked={currentJetty === 'ст. м. Таганская, у 3 входа метро'}
						onChange={(event) => setCurrentJetty(event.target.value)}
					/>
				</div>
				<h3>Выберите дату и время экскурсии</h3>
				<div className={styles.Cart__dates} ref={datesRef}>
					<div>
						{datesList}
						{dates.length > 3 && (
							<button
								className={`${styles.Cart__date} ${styles.Cart__date_more}`}
								onClick={() => setIsVisibleCalendar((prevState) => !prevState)}
							>
								<svg width="16" height="13" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.5139 2.00009H18.8889C19.4412 2.00009 19.8889 2.44781 19.8889 3.00009V17C19.8889 17.5523 19.4412 18 18.8889 18H1.88892C1.33663 18 0.888916 17.5523 0.888916 17V3.00009C0.888916 2.44781 1.33663 2.00009 1.88892 2.00009H3.26392M12.7639 2.00009H10.3889H8.01392" stroke="#F0515D"/>
									<rect x="4.88892" width="1.125" height="3.99998" rx="0.5625" fill="#F0515D"/>
									<rect x="14.8889" width="1.125" height="3.99998" rx="0.5625" fill="#F0515D"/>
								</svg>
								<em>Выбрать дату</em>
							</button>
						)}
					</div>
					<div className={`${styles.Cart__calendar} ${isVisibleCalendar ? styles.Cart__calendar_active : ''}`}>
						<Calendar
							locale={router.locale}
							value={dateValue}
							onChange={setDateValue}
							onClickDay={() => setIsVisibleCalendar(false)}
						/>
					</div>
				</div>
				<h3>Время отправления</h3>
				<div className={styles.Cart__times}>
					{times.map((time, index) => (
						<button
							className={`${styles.Cart__time} ${activeTime === time ? styles.Cart__time_active : ''}`}
							onClick={() => setActiveTime(time)}
							key={index}
						>
							{time}
						</button>
					))}
				</div>
				<h3>Время обратного отправления</h3>
				<div className={styles.Cart__times}>
					{backTimes.map((time, index) => (
						<button
							className={`${styles.Cart__time} ${activeBackTime === time ? styles.Cart__time_active : ''}`}
							onClick={() => setActiveBackTime(time)}
							key={index}
						>
							{time}
						</button>
					))}
				</div>
				<h3>Выберите билеты</h3>
				<div className={styles.Cart__tickets}>
					{ticketsList}
				</div>
			</div>
		</div>
	);
};

export default Cart;
