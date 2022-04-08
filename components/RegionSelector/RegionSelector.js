import {useRouter} from 'next/router';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setIsActiveRegionSelector} from '../../store/slices';
import {setSelectedCity} from '../../store/slices/geolocation';
import styles from './RegionSelector.module.scss';
import Image from 'next/image';

const RegionSelector = ({isActiveRegionSelector}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const citiesTranslates = useSelector((state) => state['geolocationSlice'].citiesTranslates);
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	const cities = useSelector((state) => state['geolocationSlice'].cities);
	
	const handleClickCity = (index) => {
		dispatch(setSelectedCity(index));
		router.push({
			pathname: '/[city]',
			query: {city: cities[index]?.['internationalName'].toLowerCase() || ''},
		}).then();
		dispatch(setIsActiveRegionSelector(false));
	};
	
	const citiesList = cities.length ? cities?.map((city, index) => (
		<li
			className={`
				${styles.RegionSelector__region}
				${city['internationalName'].toLowerCase() === selectedCity?.['internationalName']?.toLowerCase() ? styles.RegionSelector__region_active : ''}
			`}
			key={index}
			onClick={() => handleClickCity(index)}
		>
			{citiesTranslates[city['internationalName'].toLowerCase()]}
		</li>
	)) : null;
	
	return (
		<div className={`${styles.RegionSelector} ${isActiveRegionSelector ? styles.RegionSelector_active : ''}`}>
			<div className={styles.RegionSelector__overlay} onClick={() => dispatch(setIsActiveRegionSelector(false))}/>
			<div className={styles.RegionSelector__container}>
				<header>
					<button
						onClick={() => dispatch(setIsActiveRegionSelector(false))}
						className={`${styles.RegionSelector__button} ${styles.RegionSelector__button_desktop}`}
					>
						<Image
							src="/assets/images/region-selector/region-selector-close-icon.svg"
							width={14}
							height={14}
							alt=""
						/>
					</button>
					<button
						onClick={() => dispatch(setIsActiveRegionSelector(false))}
						className={`${styles.RegionSelector__button} ${styles.RegionSelector__button_mobile}`}
					>
						<Image
							src="/assets/images/region-selector/region-selector-arrow-icon.svg"
							width={20}
							height={8}
							alt=""
						/>
					</button>
				</header>
				<h3>Выберите ваш город</h3>
				<div>
					<span>Россия</span>
					<ul>{citiesList}</ul>
				</div>
			</div>
		</div>
	);
};

export default connect(
	(state) => ({
		isActiveRegionSelector: state.indexSlice.isActiveRegionSelector,
	}),
)(RegionSelector);
