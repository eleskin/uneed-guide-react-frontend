import Link from 'next/link';
import {useRouter} from 'next/router';
import {getNoun} from '../../utils/functions';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({price, link, image, title, count, labels = []}) => {
	const router = useRouter();
	
	const labelsList = {
		popular: 'Популярное',
		together: 'Идеально для двоих',
	};
	
	return (
		<Link href={link}>
			<a
				className={styles.CategoryCard}
				style={{
					background: `url(${image}) no-repeat center center`,
					backgroundSize: 'cover',
				}}
			>
				<header className={styles.CategoryCard__header}>
					<span className={styles.CategoryCard__price}>от {price} ₽</span>
					{labels.map((label, index) => (
						<i key={index} className={styles.CategoryCard__label}>{labelsList[label]}</i>
					))}
				</header>
				<div className={styles.PopularCategoriesCard__info}>
					<h4 className={styles.CategoryCard__title}>{title}</h4>
					<span className={styles.CategoryCard__count}>
						{count} {router.locale === 'ru' ? getNoun(count, 'предложение', 'предложения', 'предложений') : (count > 1 ? 'offers' : 'offer')}
					</span>
				</div>
			</a>
		</Link>
	);
};

export default CategoryCard;
