import styles from '/styles/Home.module.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import PopularCategories from '../components/PopularCategories/PopularCategories';

const Home = () => {
	return (
		<div className={styles.Home}>
			<FirstScreen/>
			<PopularCategories/>
		</div>
	);
};

export default Home;
