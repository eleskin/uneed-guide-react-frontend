import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import styles from './PopularCategoriesCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PopularCategoriesCard = ({price, title, count, image}) => {
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	return (
		<Link href="#">
			<div className={styles.PopularCategoriesCard}>
				<div className={styles.PopularCategoriesCard__image}>
					<Image src={image} width={390} height={230} alt="" layout="responsive"/>
					<span className={styles.PopularCategoriesCard__price}>
						{languageFile?.['popular-categories-card']?.['price']} {price} ₽
					</span>
				</div>
				<div className={styles.PopularCategoriesCard__info}>
					<h5>{title}</h5>
					<span>
						{languageFile?.['popular-categories-card']?.['count-begin']} {count} {languageFile?.['popular-categories-card']?.['count-end']}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default PopularCategoriesCard;
