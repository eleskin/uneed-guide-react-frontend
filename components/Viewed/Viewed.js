import Container from '../Container/Container';
import ExcursionCard from '../ExcursionCard/ExcursionCard';
import Title from '../Title/Title';
import styles from './Viewed.module.scss';

const Viewed = () => {
	const slides = [
		{},
		{},
		{},
		{},
	];
	
	const slidesList = slides.map((slide, index) => (
		<ExcursionCard
			viewed={true}
			key={index}
		/>
	));
	
	return (
		<div className={styles.Viewed}>
			<Container>
				<Title>Вы смотрели</Title>
			</Container>
			<div className={styles.Viewed__slider}>
				<div className={styles.Viewed__container}>
					{slidesList}
				</div>
			</div>
		</div>
	);
};

export default Viewed;
