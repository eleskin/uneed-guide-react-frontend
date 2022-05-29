import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Product = () => {
	const router = useRouter();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	useEffect(() => {
		router.push(`/${selectedCity}/categories/product`);
	});
};

export default Product;
