import styles from '/styles/Home.module.scss';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';

const Home = () => {
	return (
		<div className={styles.Home}>
			<FirstScreen/>
			<PopularCategories/>
			<SpecialOffers/>
		</div>
	);
};

export default Home;
