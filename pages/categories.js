import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Categories = () => {
	const router = useRouter();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	useEffect(() => {
		router.push(`/${selectedCity}/categories`);
	});
};

export default Categories;
