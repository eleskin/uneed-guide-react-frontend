import {useRouter} from 'next/router';
import Calendar from 'react-calendar';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import styles from './BuyTicket.module.scss';
import {Fragment, useState} from 'react';
import Form from '../../ui/Form/Form';
import CardContainer from '../CardContainer/CardContainer';

const BuyTicket = () => {
	const router = useRouter();
	const [currentJetty, setCurrentJetty] = useState('Сенатская пристань 1');
	const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
	
	return (
		<div className={styles.BuyTicket}>
			<CardContainer theme="dark">
				<h2 style={{color: '#ffffff'}}>Приобрести билет</h2>
				<div className={styles.BuyTicket__jetty}>
					<Form.Select
						value={currentJetty}
						callback={setCurrentJetty}
						title="Выберите причал"
						theme="dark"
					>
						<Fragment>
							<Form.Option value="Сенатская пристань 1">Сенатская пристань 1</Form.Option>
							<Form.Option value="Сенатская пристань 2">Сенатская пристань 2</Form.Option>
							<Form.Option value="Сенатская пристань 3">Сенатская пристань 3</Form.Option>
						</Fragment>
					</Form.Select>
				</div>
				<div className={styles.BuyTicket__dates}>
					<span>Выберите дату и время экскурсии</span>
					<WeekCalendar/>
					<div className={styles.BuyTicket__date}>
						<button className={styles.BuyTicket__button} onClick={() => setIsVisibleCalendar(!isVisibleCalendar)}>
							<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.7778 1.77734H16.8889C17.4412 1.77734 17.8889 2.22506 17.8889 2.77734V14.9996C17.8889 15.5519 17.4412 15.9996 16.8889 15.9996H2C1.44771 15.9996 1 15.5519 1 14.9996V2.77734C1 2.22506 1.44772 1.77734 2 1.77734H3.11111M11.5556 1.77734H9.44444H7.33333" stroke="#362929"/>
								<rect x="4.55566" width="1" height="3.55556" rx="0.5" fill="#362929"/>
								<rect x="13.4443" width="1" height="3.55556" rx="0.5" fill="#362929"/>
							</svg>
							Выбрать другую дату
						</button>
						<div className={`${styles.BuyTicket__calendar} ${isVisibleCalendar ? styles.BuyTicket__calendar_active : ''}`}>
							<Calendar locale={router.locale}/>
						</div>
					</div>
				</div>
			</CardContainer>
		</div>
	);
};

export default BuyTicket;
