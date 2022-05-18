import Alert from '../components/Alert/Alert';
import CardContainer from '../components/CardContainer/CardContainer';
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
							<div className={styles.Order__cart}>
								<h2>Корзина</h2>
							</div>
						</CardContainer>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Order;
