import styles from '/styles/Home.module.scss';
import {useState} from 'react';
import Advantages from '../components/Advantages/Advantages';
import CatalogLink from '../components/CatalogLink/CatalogLink';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import LimitedOpportunities from '../components/LimitedOpportunities/LimitedOpportunities';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';
import Viewed from '../components/Viewed/Viewed';

const Home = () => {
	const [value, onChange] = useState(new Date());
	
	return (
		<div className={styles.Home}>
			<FirstScreen value={value} onChange={onChange}/>
			<PopularCategories/>
			<SpecialOffers value={value}/>
			<LimitedOpportunities/>
			<Advantages/>
			<Viewed isMainPage={true}/>
			<CatalogLink/>
		</div>
	);
};

export default Home;
