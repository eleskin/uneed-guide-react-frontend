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
			pathname: '[city]',
			query: {city: cities[index]?.['internationalName'].toLowerCase() || ''},
		}).then();
		dispatch(setIsActiveRegionSelector(false));
	};
	
	const citiesList = Object.entries(citiesTranslates).map(([internationalName, city], index) => (
		<li
			className={`
				${styles.RegionSelector__region}
				${internationalName.toLowerCase() === selectedCity?.['internationalName']?.toLowerCase() ? styles.RegionSelector__region_active : ''}
			`}
			key={index}
			onClick={() => handleClickCity(index)}
		>
			{city}
		</li>
	));
	
	return (
		<div className={`${styles.RegionSelector} ${isActiveRegionSelector ? styles.RegionSelector_active : ''}`}>
			<div className={styles.RegionSelector__overlay} onClick={() => dispatch(setIsActiveRegionSelector(false))}/>
			<div className={styles.RegionSelector__container}>
				<header>
					<button onClick={() => dispatch(setIsActiveRegionSelector(false))}>
						<Image
							src="/assets/images/region-selector/region-selector-close-icon.svg"
							width={14}
							height={14}
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
