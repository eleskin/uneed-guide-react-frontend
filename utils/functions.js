const _getCityNameByCase = (selectedCity, router, russianCities) => {
	if (router.locale === 'ru' && router.query['city']) {
		return russianCities[router.query['city']];
	} else if (router.locale !== 'ru' && router.query['city']) {
		const cityNameSplit = router.query['city'].split('.') || router.query['city'];
		
		let capitalizedCityName = '';
		cityNameSplit.forEach((city, index) => {
			capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
		});
		
		return capitalizedCityName;
	} else if (router.locale === 'ru' && !router.query['city']) {
		return russianCities[selectedCity?.['internationalName']?.toLowerCase()];
	} else if (router.locale !== 'ru' && !router.query['city']) {
		const cityNameSplit = selectedCity?.['internationalName']?.toLowerCase().split('.') || selectedCity?.['internationalName']?.toLowerCase();
		
		let capitalizedCityName = '';
		cityNameSplit?.forEach((city, index) => {
			capitalizedCityName += `${city[0].toUpperCase()}${city.slice(1) + ((index < cityNameSplit.length - 1) ? '.' : '')}`;
		});
		
		return capitalizedCityName;
	}
};

export const getCityName = (selectedCity, router, type = 'dative') => {
	if (type === 'dative') {
		return _getCityNameByCase(selectedCity, router, {
			'moscow': 'Москве',
			'st.petersburg': 'Санкт-Петербургу',
			'murmansk': 'Мурманску',
		});
	} else if (type === 'prepositional') {
		return _getCityNameByCase(selectedCity, router, {
			'moscow': 'Москве',
			'st.petersburg': 'Санкт-Петербурге',
			'murmansk': 'Мурманске',
		});
	}
};
