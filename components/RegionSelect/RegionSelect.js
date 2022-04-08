import Image from 'next/image';
import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setIsActiveRegionSelector, setIsVisibleRegionSelector} from '../../store/slices';
import {getAll, setSelectedCity} from '../../store/slices/geolocation';
import Button from '../Button/Button';
import styles from './RegionSelect.module.scss';

const RegionSelect = ({mode = 'header', nearestCity, citiesTranslates, isVisibleRegionSelector}) => {
	const dispatch = useDispatch();
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	const router = useRouter();
	const cities = useSelector((state) => state['geolocationSlice'].cities);
	
	useEffect(() => {
		if (router.query['city'] && cities.length) {
			let activeCity = null;
			
			cities.forEach((city, index) => {
				if (city['internationalName'].toLowerCase() === router.query['city']) activeCity = index;
			});
			
			dispatch(setSelectedCity(activeCity));
		}
	}, [cities, citiesTranslates, dispatch, router.query, selectedCity]);
	
	const [currentRegion, setCurrentRegion] = useState(citiesTranslates?.[nearestCity?.['internationalName'].toLowerCase()]);
	
	const handleButtonYesClick = () => {
		router.push({
			pathname: '/[city]',
			query: {city: selectedCity?.['internationalName'].toLowerCase() || ''},
		}).then(r => r);
		dispatch(setIsVisibleRegionSelector(false));
	};
	
	const handleButtonNoClick = () => {
		dispatch(setIsVisibleRegionSelector(false));
		dispatch(setIsActiveRegionSelector(true));
	};
	
	const handleButtonOpenClick = () => {
		dispatch(setIsVisibleRegionSelector(true));
	};
	
	useEffect(() => {
		dispatch(getAll());
	}, [dispatch]);
	
	useEffect(() => {
		setCurrentRegion(citiesTranslates?.[selectedCity?.['internationalName'].toLowerCase()]);
	}, [citiesTranslates, selectedCity]);
	
	return (
		<div className={`${styles.RegionSelect} ${mode === 'first-screen' ? styles.RegionSelect__firstScreen : ''}`}>
			{currentRegion && (
				<Fragment>
					<div onClick={handleButtonOpenClick}>
						<Image
							src="/assets/images/first-screen/first-screen-map-pin.svg"
							width={15}
							height={15}
							alt=""
						/>
						<span>г. {currentRegion}</span>
						<i>(Ваш регион)</i>
					</div>
					<div
						className={`${styles.RegionSelect__region} ${isVisibleRegionSelector ? styles.RegionSelect__region_active : ''}`}
					>
						<header>
							<Image
								src="/assets/images/first-screen/first-screen-map-pin.svg"
								width={15}
								height={15}
								alt=""
							/>
							<span>Ваш регион {currentRegion}?</span>
						</header>
						<footer>
							<Button.Primary small={true} onClick={handleButtonYesClick}>Да, верно</Button.Primary>
							<Button.Outlined small={true} onClick={handleButtonNoClick}>Нет, другой</Button.Outlined>
						</footer>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default connect(
	(state, props) => ({
		isVisibleRegionSelector: state.indexSlice.isVisibleRegionSelector,
		nearestCity: state.geolocationSlice.nearestCity,
		citiesTranslates: state.geolocationSlice.citiesTranslates,
		props: props,
	}),
)(RegionSelect);
