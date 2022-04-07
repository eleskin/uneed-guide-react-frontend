import Image from 'next/image';
import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setIsActiveRegionSelector} from '../../store/slices';
import {getAll} from '../../store/slices/geolocation';
import Button from '../Button/Button';
import styles from './RegionSelect.module.scss';

const RegionSelect = ({mode = 'header', nearestCity, citiesTranslates}) => {
	const dispatch = useDispatch();
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	const router = useRouter();
	
	const [isVisibleRegionSelector, setIsVisibleRegionSelector] = useState(true);
	const [currentRegion, setCurrentRegion] = useState(citiesTranslates?.[nearestCity?.['internationalName']] || 'Москва');
	
	const handleButtonYesClick = () => {
		router.push({
			pathname: '/ru/[city]',
			query: {city: selectedCity?.['internationalName'].toLowerCase() || ''},
		}).then(r => r);
		setIsVisibleRegionSelector(false);
	};
	
	const handleButtonNoClick = () => {
		setIsVisibleRegionSelector(false);
		dispatch(setIsActiveRegionSelector(true));
	};
	
	const handleButtonOpenClick = () => {
		setIsVisibleRegionSelector(true);
	};
	
	useEffect(() => {
		dispatch(getAll());
	}, [dispatch]);
	
	useEffect(() => {
		setCurrentRegion(citiesTranslates?.[nearestCity?.['internationalName']] || 'Москва');
	}, [citiesTranslates, nearestCity]);
	
	return (
		<div className={`${styles.RegionSelect} ${mode === 'first-screen' ? styles.RegionSelect__firstScreen : ''}`}>
			{currentRegion !== undefined && (
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
		nearestCity: state.geolocationSlice.nearestCity,
		citiesTranslates: state.geolocationSlice.citiesTranslates,
		props: props,
	}),
)(RegionSelect);
