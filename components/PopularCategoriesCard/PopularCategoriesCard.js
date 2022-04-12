import styles from './PopularCategoriesCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PopularCategoriesCard = ({price, title, count, image}) => {
	return (
		<Link href="#">
			<div className={styles.PopularCategoriesCard}>
				<div className={styles.PopularCategoriesCard__image}>
					<Image src={image} width={390} height={230} alt="" layout="responsive"/>
					<span className={styles.PopularCategoriesCard__price}>от {price} ₽</span>
				</div>
				<div className={styles.PopularCategoriesCard__info}>
					<h5>{title}</h5>
					<span>более {count} предложений</span>
				</div>
			</div>
		</Link>
	);
};

export default PopularCategoriesCard;
