import Link from 'next/link';
import {useRouter} from 'next/router';
import {Fragment, useEffect, useState} from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import Container from '../components/Container/Container';
import styles from '../styles/Categories.module.scss';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../components/PageTitle/PageTitle';

const Categories = () => {
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	const categories = [
		{
			price: 550,
			title: 'Водные экскурсии',
			count: 26,
			image: '/assets/images/categories/categories-image-1.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 550,
			title: 'Дневные экскурсии',
			count: 26,
			image: '/assets/images/categories/categories-image-2.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 550,
			title: 'Автотуры',
			count: 23,
			image: '/assets/images/categories/categories-image-3.png',
			link: '/categories/product',
			labels: ['together'],
		},
		{
			price: 550,
			title: 'Дневные экскурсии',
			count: 26,
			image: '/assets/images/categories/categories-image-4.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 350,
			title: 'Москва-сити',
			count: 3,
			image: '/assets/images/categories/categories-image-5.png',
			link: '/categories/product',
			labels: ['popular'],
		},
		{
			price: 350,
			title: 'Ночные прогулки',
			count: 5,
			image: '/assets/images/categories/categories-image-6.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 550,
			title: 'Водные экскурсии',
			count: 44,
			image: '/assets/images/categories/categories-image-7.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 550,
			title: 'Праздники',
			count: 32,
			image: '/assets/images/categories/categories-image-8.png',
			link: '/categories/product',
			labels: [],
		},
		{
			price: 350,
			title: 'По бункерам',
			count: 12,
			image: '/assets/images/categories/categories-image-9.png',
			link: '/categories/product',
			labels: [],
		},{
			price: 350,
			title: 'По бункерам',
			count: 12,
			image: '/assets/images/categories/categories-image-9.png',
			link: '/categories/product',
			labels: [],
		},
	];
	
	const categoriesList = categories.map((category, index) => (
		<CategoryCard
			title={category.title}
			count={category.count}
			price={category.price}
			link={category.link}
			image={category.image}
			labels={category.labels}
			key={index}
		/>
	));
	
	const grids = categoriesList.reduce((grids, value, index) => {
		const gridIndex = Math.floor(index / 5);
		
		if (!grids[gridIndex]) {
			grids[gridIndex] = [];
		}
		
		grids[gridIndex].push(value);
		
		return grids;
	}, []);
	
	const gridsList = grids.map((elements, index) => {
		if (index !== grids.length - 2) {
			if (elements.length % 5 !== 0) {
				return (
					<div className={styles.Categories__grid} key={index}>
						{elements}
						<Link href="/categories/catalog">
							<div className={styles.Categories__link}>
								<div>
									<svg width="76" height="84" viewBox="0 0 76 84" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M61 67.9019C54.0684 74.6342 45.75 78 36.0456 78C26.1098 78 17.6184 74.4597 10.5708 67.3798C3.52384 60.2991 0 51.768 0 41.7858V5.57154C0 4.0394 0.543326 2.72784 1.62923 1.63686C2.71514 0.545869 4.02059 9.38217e-07 5.54559 9.38217e-07C7.07059 9.38217e-07 8.37604 0.545869 9.46195 1.63686C10.5479 2.72784 11.0912 4.0394 11.0912 5.57154V41.7858C11.0912 48.7038 13.5284 54.6117 18.4042 59.5097C23.2793 64.4083 29.1598 66.8569 36.0456 66.8569C42.9314 66.8569 48.8118 64.4083 53.687 59.5097C58.5628 54.6117 61 48.7038 61 41.7858" fill="white"/>
										<path d="M15 16.0981C21.9316 9.36581 30.25 6 39.9544 6C49.8902 6 58.3816 9.54032 65.4292 16.6202C72.4762 23.7009 76 32.232 76 42.2142V78.4285C76 79.9606 75.4567 81.2722 74.3708 82.3631C73.2849 83.4541 71.9794 84 70.4544 84C68.9294 84 67.624 83.4541 66.5381 82.3631C65.4521 81.2722 64.9088 79.9606 64.9088 78.4285V42.2142C64.9088 35.2962 62.4716 29.3883 57.5958 24.4903C52.7207 19.5917 46.8402 17.1431 39.9544 17.1431C33.0686 17.1431 27.1882 19.5917 22.313 24.4903C17.4372 29.3883 15 35.2962 15 42.2142" fill="white"/>
									</svg>
									<span>{languageFile?.['categories-page']?.['link']}</span>
								</div>
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.9976 2.58557C21.0448 1.7585 20.4127 1.0497 19.5856 1.00244L6.10756 0.232271C5.28048 0.185009 4.57169 0.817175 4.52443 1.64425C4.47717 2.47133 5.10933 3.18012 5.93641 3.22738L17.9169 3.91198L17.2323 15.8924C17.185 16.7195 17.8172 17.4283 18.6443 17.4756C19.4713 17.5228 20.1801 16.8907 20.2274 16.0636L20.9976 2.58557ZM1.99842 20.1194L20.4984 3.61944L18.5016 1.38056L0.00157773 17.8806L1.99842 20.1194Z" fill="white"/>
								</svg>
							</div>
						</Link>
					</div>
				);
			} else {
				return (
					<Fragment key={index}>
						<div className={styles.Categories__grid}>
							{elements}
						</div>
						<Link href="/categories/catalog">
							<div className={styles.Categories__link}>
								<div>
									<svg width="76" height="84" viewBox="0 0 76 84" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M61 67.9019C54.0684 74.6342 45.75 78 36.0456 78C26.1098 78 17.6184 74.4597 10.5708 67.3798C3.52384 60.2991 0 51.768 0 41.7858V5.57154C0 4.0394 0.543326 2.72784 1.62923 1.63686C2.71514 0.545869 4.02059 9.38217e-07 5.54559 9.38217e-07C7.07059 9.38217e-07 8.37604 0.545869 9.46195 1.63686C10.5479 2.72784 11.0912 4.0394 11.0912 5.57154V41.7858C11.0912 48.7038 13.5284 54.6117 18.4042 59.5097C23.2793 64.4083 29.1598 66.8569 36.0456 66.8569C42.9314 66.8569 48.8118 64.4083 53.687 59.5097C58.5628 54.6117 61 48.7038 61 41.7858" fill="white"/>
										<path d="M15 16.0981C21.9316 9.36581 30.25 6 39.9544 6C49.8902 6 58.3816 9.54032 65.4292 16.6202C72.4762 23.7009 76 32.232 76 42.2142V78.4285C76 79.9606 75.4567 81.2722 74.3708 82.3631C73.2849 83.4541 71.9794 84 70.4544 84C68.9294 84 67.624 83.4541 66.5381 82.3631C65.4521 81.2722 64.9088 79.9606 64.9088 78.4285V42.2142C64.9088 35.2962 62.4716 29.3883 57.5958 24.4903C52.7207 19.5917 46.8402 17.1431 39.9544 17.1431C33.0686 17.1431 27.1882 19.5917 22.313 24.4903C17.4372 29.3883 15 35.2962 15 42.2142" fill="white"/>
									</svg>
									<span>{languageFile?.['categories-page']?.['link']}</span>
								</div>
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.9976 2.58557C21.0448 1.7585 20.4127 1.0497 19.5856 1.00244L6.10756 0.232271C5.28048 0.185009 4.57169 0.817175 4.52443 1.64425C4.47717 2.47133 5.10933 3.18012 5.93641 3.22738L17.9169 3.91198L17.2323 15.8924C17.185 16.7195 17.8172 17.4283 18.6443 17.4756C19.4713 17.5228 20.1801 16.8907 20.2274 16.0636L20.9976 2.58557ZM1.99842 20.1194L20.4984 3.61944L18.5016 1.38056L0.00157773 17.8806L1.99842 20.1194Z" fill="white"/>
								</svg>
							</div>
						</Link>
					</Fragment>
				);
			}
		} else {
			return (
				<div className={styles.Categories__grid} key={index}>{elements}</div>
			);
		}
	});
	
	return (
		<div className={styles.Categories}>
			<Container>
				<header className={styles.Categories__header}>
					<Breadcrumbs/>
					<PageTitle>{languageFile?.['categories-page']?.['title']}</PageTitle>
				</header>
				<div className={styles.Categories__container}>{gridsList}</div>
			</Container>
		</div>
	);
};

export default Categories;
