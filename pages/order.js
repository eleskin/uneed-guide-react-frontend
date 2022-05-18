import Link from 'next/link';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import CardContainer from '../components/CardContainer/CardContainer';
import Cart from '../components/Cart/Cart';
import Container from '../components/Container/Container';
import styles from '../styles/Order.module.scss';

const Order = () => {
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
							<Cart/>
						</CardContainer>
					</div>
					<div className={styles.Order__sidebar}>
						<CardContainer padding={16}>
							<div className={styles.Order__total}>
								<header>
									<h3>Итого</h3>
									<strong>1 560 ₽</strong>
								</header>
								<div>
									<span>Билетов, 4 шт.</span>
									<span>2 100 ₽</span>
								</div>
								<div>
									<span>Скидка</span>
									<span>560 ₽</span>
								</div>
								<Button.Primary>Оформить заказ</Button.Primary>
								<a>
									Согласен с условиями <Link href="#"><a>пользования торговой площадкой</a></Link> и <Link href="#"><a>условия возврата</a></Link>
								</a>
							</div>
						</CardContainer>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Order;
