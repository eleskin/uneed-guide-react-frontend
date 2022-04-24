import ProductSlider from '../../components/ProductSlider/ProductSlider';
import styles from '../../styles/Product.module.scss'
import Viewed from '../../components/Viewed/Viewed';

const Product = () => {
	return (
		<div className={styles.Product}>
			<ProductSlider/>
			<Viewed/>
		</div>
	);
};

export default Product;
