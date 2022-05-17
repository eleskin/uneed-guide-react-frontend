import Alert from '../components/Alert/Alert';
import Container from '../components/Container/Container';
import styles from '../styles/Order.module.scss';

const Order = () => {
	return (
		<div className={styles.Order}>
			<Container isMainPage={true}>
				<Alert
					title="Предупреждение!"
					text="При покупке билета на ночную экскурсию Вам нужно выбрать текущую дату. Например если вы хотите купить билет на экскурсию 07.04.2022 в 00:35 вы должны выбрать дату - 06.04.2022."
				/>
			</Container>
		</div>
	);
};

export default Order;
