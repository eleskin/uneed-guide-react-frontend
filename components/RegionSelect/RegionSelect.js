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
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	const [isVisibleRegionSelector, setIsVisibleRegionSelector] = useState(true);
	const [currentRegion, setCurrentRegion] = useState(citiesTranslates?.[nearestCity?.['internationalName']] || 'Москва');
	
	const handleButtonYesClick = () => {
		router.push({
			pathname: '/[city]',
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
		if (router.locale === 'ru') {
			setCurrentRegion(citiesTranslates?.[nearestCity?.['internationalName'].toLowerCase()] || 'Москва');
		} else {
			setCurrentRegion(nearestCity?.['internationalName'] || 'Moscow');
		}
	}, [citiesTranslates, nearestCity]);
	
	return (
		<div className={`${styles.RegionSelect} ${mode === 'first-screen' ? styles.RegionSelect__firstScreen : ''}`}>
			{currentRegion !== undefined && (
				<Fragment>
					<div onClick={handleButtonOpenClick}>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.125 6.25C13.125 10.625 7.5 14.375 7.5 14.375C7.5 14.375 1.875 10.625 1.875 6.25C1.875 4.75816 2.46763 3.32742 3.52252 2.27252C4.57742 1.21763 6.00816 0.625 7.5 0.625C8.99184 0.625 10.4226 1.21763 11.4775 2.27252C12.5324 3.32742 13.125 4.75816 13.125 6.25Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<span>{router.locale === 'ru' && 'г.'} {currentRegion}</span>
						<i>({languageFile?.['region-select']?.['your-region']})</i>
					</div>
					<div
						className={`${styles.RegionSelect__region} ${isVisibleRegionSelector ? styles.RegionSelect__region_active : ''}`}
					>
						<header>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.125 6.25C13.125 10.625 7.5 14.375 7.5 14.375C7.5 14.375 1.875 10.625 1.875 6.25C1.875 4.75816 2.46763 3.32742 3.52252 2.27252C4.57742 1.21763 6.00816 0.625 7.5 0.625C8.99184 0.625 10.4226 1.21763 11.4775 2.27252C12.5324 3.32742 13.125 4.75816 13.125 6.25Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z" stroke="#F0515D" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<span>{languageFile?.['region-select']?.['your-region']} {currentRegion}?</span>
						</header>
						<footer>
							<Button.Primary small={true} onClick={handleButtonYesClick}>{languageFile?.['region-select']?.['yes-button']}</Button.Primary>
							<Button.Outlined small={true} onClick={handleButtonNoClick}>{languageFile?.['region-select']?.['no-button']}</Button.Outlined>
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
