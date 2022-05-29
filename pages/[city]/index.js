import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import NotFound from '../404';
import Home from '../index';

const Index = () => {
	const router = useRouter();
	const citiesTranslates = useSelector((state) => state['geolocationSlice']['citiesTranslates']);
	const [isFound, setIsFound] = useState(true);
	
	useEffect(() => {
		if (router.query['city']) {
			if (Object.keys(citiesTranslates).indexOf(router.query['city']) === -1) {
				setIsFound(false);
			} else {
				setIsFound(true);
			}
		}
	});
	
	return isFound ? <Home/> : <NotFound/>;
};

export default Index;
