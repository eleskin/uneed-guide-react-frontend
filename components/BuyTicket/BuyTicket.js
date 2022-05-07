import {format} from 'date-fns';
import {useRouter} from 'next/router';
import Calendar from 'react-calendar';
import {useOutsideClickHandler} from '../../utils/hooks';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import styles from './BuyTicket.module.scss';
import {createRef, Fragment, useEffect, useState} from 'react';
import Form from '../../ui/Form/Form';
import CardContainer from '../CardContainer/CardContainer';
import {ru as ruLocale, enUS as enLocale} from 'date-fns/locale';

const ticketsCountInitial = [];

const BuyTicket = ({tickets, children}) => {
	const router = useRouter();
	const [currentJetty, setCurrentJetty] = useState('Сенатская пристань 1');
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	const [dateValue, setDateValue] = useState();
	const [currentLocale, setCurrentLocale] = useState(ruLocale);
	const [timeValue, setTimeValue] = useState();
	const [ticketsCount, setTicketsCount] = useState(ticketsCountInitial);
	const [total, setTotal] = useState(0);
	
	const times = ['12:45', '14:25', '16:25'];
	
	const timesList = times.map((time, index) => (
		<button
			className={`${styles.BuyTicket__time} ${time === timeValue ? styles.BuyTicket__time_active : ''}`}
			onClick={() => setTimeValue(times[index])}
			key={index}
		>
			{time}
		</button>
	));
	
	useEffect(() => {
		if (router.locale === 'ru') setCurrentLocale(ruLocale);
		if (router.locale === 'en') setCurrentLocale(enLocale);
	}, [setCurrentLocale, router.locale]);
	
	const calendarRef = createRef();
	
	useOutsideClickHandler(calendarRef, isVisibleCalendar, setIsVisibleCalendar);
	
	const getTotal = (total, ticketsCount, tickets) => {
		return tickets.reduce((accumulator, ticket, index) => {
			return accumulator + ticket.price * (ticketsCount[index] || 0);
		}, 0);
	};
	
	const ticketsList = tickets.map((ticket, index) => {
		return (
			<div className={styles.BuyTicket__type} key={index}>
				<div>
					<em>{ticket.price} ₽</em>
					<i>{ticket.priceDiscount} ₽</i>
					<span>{ticket.title}</span>
				</div>
				<div>
					<button
						onClick={() => {
							ticketsCountInitial[index] = ticketsCountInitial[index] - 1;
							setTicketsCount([...ticketsCountInitial]);
							
							setTotal(getTotal(total, ticketsCountInitial, tickets));
						}}
						disabled={ticketsCount[index] <= 0}
					>
						<svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="1" width="1" height="11" rx="0.5" transform="rotate(-90 0 1)" fill="white"/>
						</svg>
					</button>
					<span>{ticketsCount[index] || 0}</span>
					<button onClick={() => {
						if (!ticketsCountInitial[index]) {
							ticketsCountInitial[index] = 0;
						}
						
						ticketsCountInitial[index] = ticketsCountInitial[index] + 1;
						setTicketsCount([...ticketsCountInitial]);
						
						setTotal(getTotal(total, ticketsCountInitial, tickets));
					}}>
						<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="5" width="1" height="11" rx="0.5" fill="white"/>
							<rect y="6" width="1" height="11" rx="0.5" transform="rotate(-90 0 6)" fill="white"/>
						</svg>
					</button>
				</div>
			</div>
		);
	});
	
	return (
		<div className={styles.BuyTicket}>
			<CardContainer theme="dark">
				<h2 style={{color: '#ffffff'}}>Приобрести билет</h2>
				<div className={styles.BuyTicket__jetty}>
					<span>Выберите причал</span>
					<div>
						<Form.Select
							value={currentJetty}
							callback={setCurrentJetty}
							title="Выберите причал"
							theme="dark"
						>
							<Fragment>
								<Form.Option value="Сенатская пристань">Сенатская пристань</Form.Option>
								<Form.Option value="ст. м. Маяковская, театр сатиры">ст. м. Маяковская, театр сатиры</Form.Option>
								<Form.Option value="ст. м. Таганская, у 3 входа метро">ст. м. Таганская, у 3 входа метро</Form.Option>
							</Fragment>
						</Form.Select>
					</div>
					<div>
						<Form.Radio
							value="Сенатская пристань"
							checked={currentJetty === 'Сенатская пристань'}
							onChange={(event) => setCurrentJetty(event.target.value)}
						/>
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
				</div>
				<div className={styles.BuyTicket__dates}>
					<span>Выберите дату и время экскурсии</span>
					<WeekCalendar dateValue={dateValue} setDateValue={setDateValue} currentLocale={currentLocale}/>
					<div className={styles.BuyTicket__date}>
						<button
							className={`${styles.BuyTicket__button} ${dateValue ? styles.BuyTicket__button_active : ''}`}
							onClick={() => {
								setTimeout(() => setIsVisibleCalendar(!isVisibleCalendar), 0);
							}}
						>
							<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.7778 1.77734H16.8889C17.4412 1.77734 17.8889 2.22506 17.8889 2.77734V14.9996C17.8889 15.5519 17.4412 15.9996 16.8889 15.9996H2C1.44771 15.9996 1 15.5519 1 14.9996V2.77734C1 2.22506 1.44772 1.77734 2 1.77734H3.11111M11.5556 1.77734H9.44444H7.33333" stroke="#362929"/>
								<rect x="4.55566" width="1" height="3.55556" rx="0.5" fill="#362929"/>
								<rect x="13.4443" width="1" height="3.55556" rx="0.5" fill="#362929"/>
							</svg>
							{!dateValue ?
								'Выбрать другую дату' :
								`${format(dateValue, 'EEEE', {locale: currentLocale})}, ${format(dateValue, 'd', {locale: currentLocale})} ${format(dateValue, 'MMMM', {locale: currentLocale})}`}
						</button>
						<div className={`${styles.BuyTicket__calendar} ${isVisibleCalendar ? styles.BuyTicket__calendar_active : ''}`} ref={calendarRef}>
							<Calendar
								locale={router.locale}
								value={dateValue}
								onChange={setDateValue}
								onClickDay={() => setIsVisibleCalendar(false)}
							/>
						</div>
					</div>
				</div>
				<div className={styles.BuyTicket__times}>
					<span>Время отправления</span>
					<div>
						{timesList}
					</div>
				</div>
				<div className={styles.BuyTicket__types}>
					<span>Выберите билеты</span>
					{ticketsList}
				</div>
				<div className={styles.BuyTicket__total}>
					<strong>{total} ₽</strong>
					<span>Итого</span>
				</div>
				<div className={styles.BuyTicket__duration}>
					<div>
						<i/>
						<span>12:45</span>
					</div>
					<div>
						<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.28699 1.71552C7.28709 1.71563 7.28719 1.71573 7.28729 1.71583C7.6882 2.11959 7.93206 2.5089 8.07496 2.79638C8.11002 2.86692 8.13897 2.93127 8.16265 2.98813C8.07525 2.98756 7.9654 2.98603 7.82803 2.98389C7.78542 2.98322 7.74034 2.9825 7.69268 2.98175C7.15651 2.9732 6.29395 2.95947 4.94 2.95947C4.94 2.95947 4.94 2.95947 4.94 2.95947L1.02105 2.95941C0.878169 2.93218 0.75417 2.83843 0.643703 2.67355C0.527387 2.49994 0.441362 2.26832 0.380093 2.02335C0.319482 1.78101 0.286689 1.54048 0.26918 1.359C0.260469 1.26872 0.255641 1.1941 0.253 1.14253C0.252602 1.13473 0.252253 1.12748 0.251948 1.12077L0.659127 0.24939H3.96438H5.82082L7.28699 1.71552Z" fill="white" stroke="white" strokeWidth="0.5"/>
							<path d="M27.7198 3.26077H19.6812H11.4258C11.8009 2.58101 12.7681 0.819029 12.9884 0.413319L12.9886 0.413075L13.077 0.249756H18.7156H24.4035L25.5007 1.24481L25.5008 1.24493L25.5718 1.30938C26.1994 1.87939 26.9595 2.56978 27.2912 2.8698C27.4009 2.97012 27.5094 3.06904 27.6089 3.15967C27.6474 3.19475 27.6845 3.22858 27.7198 3.26077Z" fill="white" stroke="white" strokeWidth="0.5"/>
							<path d="M13.3485 8.42189C13.4491 8.42346 13.5451 8.4237 13.6331 8.40107C13.7337 8.3752 13.8049 8.3252 13.8672 8.27837C14.044 8.14655 14.2379 7.91111 14.3391 7.70258L14.3407 7.69926C14.4013 7.56938 14.412 7.39478 14.4057 7.25406C14.399 7.10631 14.3707 6.93715 14.3115 6.8034L14.3108 6.80179C14.1419 6.42737 13.727 6.14548 13.3229 6.1397C13.1701 6.13508 13.015 6.18836 12.8785 6.25578L12.8785 6.25576L12.8756 6.25722C12.2878 6.5569 12.0693 7.22148 12.3659 7.80965L12.3666 7.81094C12.4641 8.00151 12.5946 8.15736 12.7668 8.26457C12.9389 8.37177 13.1356 8.41976 13.3485 8.42189ZM13.3485 8.42189C13.3483 8.42188 13.348 8.42188 13.3477 8.42188L13.3517 8.17191L13.3493 8.4219C13.349 8.42189 13.3488 8.42189 13.3485 8.42189ZM8.61407 7.82929C8.8103 8.23773 9.19453 8.44063 9.58254 8.42847C9.96809 8.41639 10.3461 8.19348 10.5495 7.78695C10.6236 7.64114 10.6486 7.45108 10.6481 7.28805C10.6477 7.12402 10.6214 6.93655 10.5517 6.79245L10.5511 6.79114C10.3051 6.28974 9.71629 6.01196 9.19711 6.20165L9.19616 6.202C8.74518 6.36886 8.50166 6.79108 8.50166 7.28914C8.50166 7.3931 8.50446 7.4834 8.52205 7.57219C8.54038 7.66475 8.57213 7.74319 8.61407 7.82929ZM8.61407 7.82929C8.61396 7.82906 8.61386 7.82884 8.61375 7.82861L8.83913 7.72051L8.61445 7.83006C8.61432 7.8298 8.6142 7.82955 8.61407 7.82929ZM6.20978 8.35738L6.20976 8.35736C6.09483 8.40312 5.9413 8.41369 5.81693 8.41098C5.68885 8.40819 5.53819 8.39002 5.42145 8.34511L6.20978 8.35738ZM6.20978 8.35738L6.21313 8.35599M6.20978 8.35738L6.21313 8.35599M6.21313 8.35599C6.45872 8.25405 6.64918 8.05356 6.76481 7.82775C6.88056 7.60171 6.93229 7.32907 6.87376 7.06738L6.87366 7.06693M6.21313 8.35599L6.87366 7.06693M6.87366 7.06693C6.71669 6.37112 6.01 5.90623 5.36206 6.2527L6.87366 7.06693ZM4.72749 7.33357C4.71963 6.91788 4.92937 6.48335 5.36185 6.25281L4.72749 7.33357ZM4.72749 7.33357C4.73537 7.75044 4.96427 8.16949 5.42117 8.34501L4.72749 7.33357ZM30.485 4.53302L30.4861 4.53303C30.8903 4.53804 31.2601 4.54388 31.5306 4.54889C31.5982 4.55014 31.6596 4.55134 31.7136 4.55245C31.6625 4.73639 31.5592 5.01078 31.4206 5.32436C31.2451 5.72172 31.0267 6.15202 30.8258 6.48347C29.8215 8.11818 27.8439 10.4616 25.9588 12.2295L25.9581 12.2301L25.5773 12.5899H15.2829H5.04059L4.68261 11.9048L4.68253 11.9047C3.58051 9.79948 2.70848 7.81593 2.16387 6.19033C2.03714 5.80837 1.79002 4.93966 1.68446 4.52752L4.14934 4.51967L4.15073 4.51966C7.58742 4.48958 28.4819 4.49963 30.485 4.53302ZM24.1168 6.26389L24.1168 6.26389L24.1154 6.26456C24.0078 6.31615 23.9131 6.376 23.8295 6.46238C23.7471 6.54749 23.6872 6.64633 23.6328 6.75911L23.6319 6.76105C23.2747 7.51723 23.7284 8.4197 24.5873 8.41522L24.5895 8.41519C24.8979 8.41091 25.1533 8.29887 25.3656 8.07176C25.4701 7.95987 25.5525 7.84473 25.6058 7.70728C25.659 7.57033 25.6767 7.42835 25.6767 7.27242C25.6767 7.16873 25.6731 7.0793 25.652 6.98988C25.6306 6.89886 25.5945 6.82205 25.5519 6.73963L25.5519 6.73963L25.5509 6.73779C25.2687 6.20283 24.6607 6.00714 24.1168 6.26389ZM21.8533 6.88916L21.8534 6.88914L21.8517 6.8846C21.7977 6.73877 21.6823 6.59146 21.568 6.47851C21.4541 6.36596 21.3042 6.25079 21.1539 6.19975L21.1538 6.19969C21.0213 6.15482 20.8717 6.14263 20.7346 6.15289C20.5991 6.16303 20.4533 6.19681 20.332 6.26378C20.1524 6.3604 20.01 6.52134 19.9133 6.69632C19.8157 6.87294 19.7548 7.08137 19.7548 7.28914C19.7548 7.54976 19.8627 7.86522 20.0256 8.05822C20.4971 8.6213 21.3876 8.50208 21.7672 7.88914C21.8536 7.75021 21.894 7.56418 21.9068 7.40003C21.9198 7.23268 21.9074 7.04416 21.8533 6.88916ZM16.0845 6.83261L16.0845 6.8326L16.0831 6.83579C16.0241 6.97842 16.002 7.14696 16.0052 7.30388C16.0085 7.46123 16.0376 7.62943 16.1005 7.77323C16.4564 8.59904 17.5946 8.64196 18.0241 7.85724L18.0245 7.85645C18.1005 7.71642 18.1396 7.56696 18.151 7.39406C18.1888 6.90896 17.9697 6.47788 17.5526 6.25041L17.5508 6.24947C17.4773 6.21012 17.4036 6.17453 17.3153 6.15564C17.2283 6.13702 17.1435 6.13812 17.0527 6.14342L17.0525 6.14344C16.9799 6.14775 16.9018 6.16023 16.8328 6.17618C16.7693 6.19088 16.6929 6.21318 16.6324 6.24518C16.5177 6.30458 16.4053 6.39995 16.3147 6.49691C16.2237 6.59432 16.1357 6.71355 16.0845 6.83261Z" fill="white" stroke="white" strokeWidth="0.5"/>
							<path d="M28 14L26.375 15C25.3785 15.6133 24.1215 15.6133 23.125 15V15C22.1285 14.3868 20.8715 14.3868 19.875 15V15C18.8785 15.6133 17.6215 15.6133 16.625 15V15C15.6285 14.3868 14.3715 14.3868 13.375 15V15C12.3785 15.6133 11.1215 15.6133 10.125 15V15C9.12846 14.3868 7.87154 14.3868 6.875 15V15C5.87846 15.6133 4.62154 15.6133 3.625 15L2 14" stroke="white" strokeWidth="0.5"/>
						</svg>
						<span>1 ч 30 мин</span>
					</div>
					<div>
						<i/>
						<span>14:15</span>
					</div>
				</div>
				<button className={styles.BuyTicket__button}>
					Оформить билеты
				</button>
				<div className={styles.BuyTicket__advantages}>
					{children}
				</div>
			</CardContainer>
		</div>
	);
};

export default BuyTicket;
