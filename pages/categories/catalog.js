import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Catalog = () => {
	const router = useRouter();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	useEffect(() => {
		router.push(`/${selectedCity}/categories/catalog`);
	});
};

export default Catalog;
