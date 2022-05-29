import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import styles from '../styles/Error.module.scss';

const Error = () => {
	return (
		<div className={styles.Error}>
			<Container isMainPage={true}>
				<div className={styles.Error__container}>
					<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="88" height="88" rx="44" transform="matrix(1 0 0 -1 0 88)" fill="#F0515D"/>
						<rect x="27.6885" y="56.5078" width="40.7568" height="5.94226" rx="2.97113" transform="rotate(-45 27.6885 56.5078)" fill="white"/>
						<rect x="56.4966" y="59.9614" width="40.7568" height="5.9718" rx="2.9859" transform="rotate(-135 56.4966 59.9614)" fill="white"/>
					</svg>
					<h1>Ошибка оплаты</h1>
					<p>Возникли проблемы при оплате. Попробуйте еще раз или обратитесь в тех. поддержку</p>
					<div className={styles.Error__buttons}>
						<Button.Primary small={true}>Повторить оплату</Button.Primary>
						<Button.Outlined small={true}>Раздел “Помощь”</Button.Outlined>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Error;
