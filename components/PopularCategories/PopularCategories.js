import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPopulars} from '../../store/slices/mainPage';
import Container from '../Container/Container';
import PopularCategoriesCard from '../PopularCategoriesCard/PopularCategoriesCard';
import Title from '../Title/Title';
import styles from './PopularCategories.module.scss';
import Link from 'next/link';

const PopularCategories = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		dispatch(getPopulars({
			limit: 10,
			offset: 0,
//			city: 0,
			locale: router.locale,
			popular: 1,
		})).then(console.log);
	}, [dispatch]);
	
	return (
		<div className={styles.PopularCategories}>
			<Container isMainPage={true}>
				<Title>{languageFile?.['popular-categories']?.['title']}</Title>
				<div className={styles.PopularCategories__cards}>
					<PopularCategoriesCard
						price={550}
						image="/assets/images/popular-categories/popular-categories-img-1.png"
						title="Водные экскурсии"
						count={13}
						link={`/${selectedCity?.['internationalName'].toLowerCase()}/categories/catalog`}
					/>
					<PopularCategoriesCard
						price={550}
						image="/assets/images/popular-categories/popular-categories-img-2.png"
						title="Дневные экскурсии"
						count={32}
						link={`/${selectedCity?.['internationalName'].toLowerCase()}/categories/catalog`}
					/>
					<PopularCategoriesCard
						price={350}
						image="/assets/images/popular-categories/popular-categories-img-3.png"
						title="Пешеходные экскурсии"
						count={32}
						link={`/${selectedCity?.['internationalName'].toLowerCase()}/categories/catalog`}
					/>
				</div>
				<footer className={styles.PopularCategories__footer}>
					<Link href={`/${selectedCity?.['internationalName'].toLowerCase()}/categories/catalog`}>
						<a>
							{languageFile?.['popular-categories']?.['catalog-link']}
							<svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="#212121"/>
							</svg>
						</a>
					</Link>
				</footer>
			</Container>
		</div>
	);
};

export default PopularCategories;
