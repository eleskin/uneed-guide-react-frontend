import Link from 'next/link';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import CardContainer from '../components/CardContainer/CardContainer';
import Cart from '../components/Cart/Cart';
import Container from '../components/Container/Container';
import Help from '../components/Help/Help';
import styles from '../styles/Order.module.scss';
import Form from '../ui/Form/Form';

const Order = () => {
	const [totalSumWithoutDiscount, setTotalSumWithoutDiscount] = useState(0);
	const [totalSumWithDiscount, setTotalSumWithDiscount] = useState(0);
	const [totalTickets, setTotalTickets] = useState(0);
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	const [order] = useState([
		{
			tickets: [
				{title: 'Взрослый билет', price: 800, priceAmount: 700},
				{title: 'Детский билет', price: 550, priceAmount: 450},
				{title: 'Льготный билет', price: 350, priceAmount: 250},
			],
		},
	]);
	
	
	return (
		<div className={styles.Order}>
			<Container isMainPage={true}>
				<div className={styles.Order__container}>
					<div>
						<Alert
							title="Предупреждение!"
							backgroundColor="#E4C830"
							buttonColor="#ddc12e"
							borderColor="#D1B62B"
						>
							При покупке билета на ночную экскурсию Вам нужно выбрать текущую дату. Например если вы хотите купить
							билет на экскурсию 07.04.2022 в 00:35 вы должны выбрать дату - 06.04.2022.
						</Alert>
						<CardContainer padding={16}>
							<Cart
								order={order}
								setTotalSumWithoutDiscount={setTotalSumWithoutDiscount}
								setTotalSumWithDiscount={setTotalSumWithDiscount}
								setTotalTickets={setTotalTickets}
							/>
						</CardContainer>
						<CardContainer padding={16}>
							<div className={styles.Order__form}>
								<header>
									<h2>Ваши данные</h2>
									<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="7" cy="7" r="7" fill="#212632"/>
										<circle cx="7" cy="4" r="1" fill="white"/>
										<path d="M6 6H8V12H6V8L4 6H6Z" fill="white"/>
									</svg>
								</header>
								<Button.Outlined small={true}>Вход или регистрация</Button.Outlined>
								<Form.Input type="text" placeholder="Ваше имя" style={{padding: '0.5rem 0.25rem'}}/>
								<Form.Input type="tel" title="Ваш телефон" icons={false} padding="0.5rem 1rem"/>
								<Form.Input type="text" placeholder="Ваша фамилия" style={{padding: '0.5rem 0.25rem'}}/>
								<Form.Input type="text" placeholder="Ваша электронная почта" style={{padding: '0.5rem 0.25rem'}} htmlType="email"/>
							</div>
						</CardContainer>
						<Alert
							title="Автоматическая регистрация"
							backgroundColor="#212632"
							buttonColor="#1b202a"
							borderColor="#11141B"
						>
							При покупки билета онлайн вы будете автоматически зарегистрированы на сайте. Это позволит вам управлять
							купленными билетами. Если у вас уже есть аккаунт - <Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/order`}><a style={{
							fontWeight: 700,
							color: '#f0515d',
							textDecoration: 'none',
						}}>войдите</a></Link>
						</Alert>
					</div>
					<div className={styles.Order__sidebar}>
						<div className={styles.Order__result}>
							<CardContainer padding={16}>
								<div className={styles.Order__total}>
									<header>
										<h3>Итого</h3>
										<strong>{totalSumWithDiscount} ₽</strong>
									</header>
									<div>
										<span>Билетов, {totalTickets} шт.</span>
										<span>{totalSumWithoutDiscount} ₽</span>
									</div>
									<div>
										<span>Скидка</span>
										<span>{totalSumWithoutDiscount - totalSumWithDiscount} ₽</span>
									</div>
									<Button.Primary>Оформить заказ</Button.Primary>
									<p>
										Согласен с условиями <Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/order`}><a>пользования торговой
										                                                         площадкой</a></Link> и <Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/order`}><a>условия возврата</a></Link>
									</p>
								</div>
							</CardContainer>
							<ul className={styles.Order__advantages}>
								<li>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z" fill="#F0515D"/>
									</svg>
									<span>Предоплата не требуется, платите на месте</span>
								</li>
								<li>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z" fill="#F0515D"/>
									</svg>
									<span>Безопасные платежи. Мы не храним данные ваших платежных систем</span>
								</li>
							</ul>
							<Help links={[
								{text: 'Частозадаваемые вопросы', href: '#'},
								{text: 'Задать вопрос по экскурсии', href: '#'},
								{text: 'Контакты', href: '#'},
							]}/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Order;
