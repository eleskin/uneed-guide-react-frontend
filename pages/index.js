import styles from '/styles/Home.module.scss';
import Button from '../components/Button/Button';

const Home = () => {
	return (
		<div className={styles.Home}>
			<Button.Primary small={true}>Нет, другой</Button.Primary>
			<Button.Secondary small={true}>Нет, другой</Button.Secondary>
			<Button.Outlined small={true}>Нет, другой</Button.Outlined>
			<Button.Primary small={false}>Нет, другой</Button.Primary>
			<Button.Secondary small={false}>Нет, другой</Button.Secondary>
			<Button.Outlined small={false}>Нет, другой</Button.Outlined>
		</div>
	);
};

export default Home;
