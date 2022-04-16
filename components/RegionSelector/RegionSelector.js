import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setIsActiveRegionSelector} from '../../store/slices';
import {setSelectedCity} from '../../store/slices/geolocation';
import styles from './RegionSelector.module.scss';

const RegionSelector = ({isActiveRegionSelector}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const citiesTranslates = useSelector((state) => state['geolocationSlice'].citiesTranslates);
	const selectedCity = useSelector((state) => state['geolocationSlice'].selectedCity);
	const cities = useSelector((state) => state['geolocationSlice'].cities);
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	
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
			{router.locale === 'ru' ? citiesTranslates[city['internationalName'].toLowerCase()] : city['internationalName']}
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
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 8L15 15M8 8L15 1M8 8L1 15M8 8L1 1" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round"/>
						</svg>
					</button>
					<button
						onClick={() => dispatch(setIsActiveRegionSelector(false))}
						className={`${styles.RegionSelector__button} ${styles.RegionSelector__button_mobile}`}
					>
						<svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.25" d="M21 1.12341L11 8.26221L1 1.12341" stroke="black" strokeWidth="2" strokeLinecap="round"/>
						</svg>
					</button>
				</header>
				<h3>{languageFile?.['region-selector']?.['title']}</h3>
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
