import styles from '/styles/Home.module.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';

const Home = () => {
	return (
		<div className={styles.Home}>
			<FirstScreen/>
		</div>
	);
};

export default Home;
