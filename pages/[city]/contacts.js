import styles from '/styles/Contacts.module.scss';
import Container from '../../components/Container/Container';
import Difficulty from '../../components/Difficulty/Difficulty';

const Contacts = () => {
	return (
		<div className={styles.Contacts}>
			<Container isMainPage={true}>
				<h1>Контакты</h1>
				<div className={styles.Contacts__links}>
					<Difficulty/>
					<div className={styles.Contacts__partners}></div>
				</div>
				<div className={styles.Contacts__contact}>
					<div className={styles.Contacts__address}>
					
					</div>
					<div className={styles.Contacts__map}>
					
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Contacts;
