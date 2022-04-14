import styles from '/styles/Home.module.scss';
import Advantages from '../components/Advantages/Advantages';
import CatalogLink from '../components/CatalogLink/CatalogLink';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import LimitedOpportunities from '../components/LimitedOpportunities/LimitedOpportunities';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';

const Home = () => {
	return (
		<div className={styles.Home}>
			<FirstScreen/>
			<PopularCategories/>
			<SpecialOffers/>
			<LimitedOpportunities/>
			<Advantages/>
			<CatalogLink/>
		</div>
	);
};

export default Home;
