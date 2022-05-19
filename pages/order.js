import Link from 'next/link';
import {useState} from 'react';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import CardContainer from '../components/CardContainer/CardContainer';
import Cart from '../components/Cart/Cart';
import Container from '../components/Container/Container';
import styles from '../styles/Order.module.scss';


const Order = () => {
	const [totalSumWithoutDiscount, setTotalSumWithoutDiscount] = useState(0);
	const [totalSumWithDiscount, setTotalSumWithDiscount] = useState(0);
	
	const [order] = useState([
		{
			tickets: [
				{title: 'Взрослый билет', price: 800, priceAmount: 700},
				{title: 'Детский билет', price: 550, priceAmount: 450},
				{title: 'Взрослый билет (с ланчем)', price: 980, priceAmount: 880},
			]
		}
	]);
	
	
	return (
		<div className={styles.Order}>
			<Container isMainPage={true}>
				<div className={styles.Order__container}>
					<div>
						<Alert
							title="Предупреждение!"
							text="При покупке билета на ночную экскурсию Вам нужно выбрать текущую дату. Например если вы хотите купить билет на экскурсию 07.04.2022 в 00:35 вы должны выбрать дату - 06.04.2022."
						/>
						<CardContainer padding={16}>
							<Cart
								order={order}
								setTotalSumWithoutDiscount={setTotalSumWithoutDiscount}
								setTotalSumWithDiscount={setTotalSumWithDiscount}
							/>
						</CardContainer>
					</div>
					<div className={styles.Order__sidebar}>
						<CardContainer padding={16}>
							<div className={styles.Order__total}>
								<header>
									<h3>Итого</h3>
									<strong>{totalSumWithDiscount} ₽</strong>
								</header>
								<div>
									<span>Билетов, 4 шт.</span>
									<span>{totalSumWithoutDiscount} ₽</span>
								</div>
								<div>
									<span>Скидка</span>
									<span>{totalSumWithoutDiscount - totalSumWithDiscount} ₽</span>
								</div>
								<Button.Primary>Оформить заказ</Button.Primary>
								<p>
									Согласен с условиями <Link href="#"><a>пользования торговой площадкой</a></Link> и <Link href="#"><a>условия возврата</a></Link>
								</p>
							</div>
						</CardContainer>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Order;
