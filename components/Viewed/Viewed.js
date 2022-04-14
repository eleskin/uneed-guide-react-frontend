import Container from '../Container/Container';
import Title from '../Title/Title';
import styles from './Viewed.module.scss';

const Viewed = () => {
	return (
		<div className={styles.Viewed}>
			<Container>
				<Title>Вы смотрели</Title>
				
			</Container>
		</div>
	);
};

export default Viewed;
