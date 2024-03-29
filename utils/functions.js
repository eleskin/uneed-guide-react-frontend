export const getNoun = (number, one, two, five) => {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
};

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

export const getTranslatedPageName = (pageName, locale) => {
	const russianTranslates = {
		home: 'главная',
		catalog: 'каталог',
		categories: 'категории',
	};
	
	if (locale === 'en') {
		return pageName;
	} else if (locale === 'ru') {
		return russianTranslates[pageName];
	}
};
