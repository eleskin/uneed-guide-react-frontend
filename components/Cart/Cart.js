import {useState} from 'react';
import Image from 'next/image';
import styles from './Cart.module.scss';
import Form from '../../ui/Form/Form';

const Cart = () => {
	const [currentJetty, setCurrentJetty] = useState('ст. м. Маяковская, театр сатиры');
	
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
				<div className={styles.Cart__dates}>
					<button className={`${styles.Cart__date} ${styles.Cart__date_active}`}>
						<em>Сегодня</em>
						<span>30 марта</span>
					</button>
					<button className={styles.Cart__date}>
						<em>Завтра</em>
						<span>31 марта</span>
					</button>
					<button className={styles.Cart__date}>
						<em>Понедельник</em>
						<span>1 апреля</span>
					</button>
					<button className={styles.Cart__date}>
						<em>Вторник</em>
						<span>2 апреля</span>
					</button>
				</div>
				<h3>Время отправления</h3>
				<div className={styles.Cart__times}>
					<button className={`${styles.Cart__time} ${styles.Cart__time_active}`}>12:45</button>
					<button className={styles.Cart__time}>12:45</button>
					<button className={styles.Cart__time}>12:45</button>
					<button className={styles.Cart__time}>12:45</button>
				</div>
				<h3>Выберите билеты</h3>
				<div className={styles.Cart__tickets}>
					<div className={styles.Cart__ticket}>
						<div>
							<em>Взрослый билет</em>
							<div>
								<span>Цена 1 билета</span>
								<strong>700 ₽</strong>
							</div>
						</div>
						<div>
							<button>
								<svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="1" width="1" height="11" rx="0.5" transform="rotate(-90 0 1)" fill="#221818"/>
								</svg>
							</button>
							<output>2</output>
							<button>
								<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="5" width="1" height="11" rx="0.5" fill="#221818"/>
									<rect y="6" width="1" height="11" rx="0.5" transform="rotate(-90 0 6)" fill="#221818"/>
								</svg>
							</button>
						</div>
					</div>
					<div className={styles.Cart__ticket}>
						<div>
							<em>Детский билет</em>
							<div>
								<span>Цена 1 билета</span>
								<strong>450 ₽</strong>
							</div>
						</div>
						<div>
							<button>
								<svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="1" width="1" height="11" rx="0.5" transform="rotate(-90 0 1)" fill="#221818"/>
								</svg>
							</button>
							<output>0</output>
							<button>
								<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="5" width="1" height="11" rx="0.5" fill="#221818"/>
									<rect y="6" width="1" height="11" rx="0.5" transform="rotate(-90 0 6)" fill="#221818"/>
								</svg>
							</button>
						</div>
					</div>
					<div className={styles.Cart__ticket}>
						<div>
							<em>Взрослый билет (с ланчем)</em>
							<div>
								<span>Цена 1 билета</span>
								<strong>880 ₽</strong>
							</div>
						</div>
						<div>
							<button>
								<svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="1" width="1" height="11" rx="0.5" transform="rotate(-90 0 1)" fill="#221818"/>
								</svg>
							</button>
							<output>2</output>
							<button>
								<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="5" width="1" height="11" rx="0.5" fill="#221818"/>
									<rect y="6" width="1" height="11" rx="0.5" transform="rotate(-90 0 6)" fill="#221818"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
