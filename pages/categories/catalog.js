import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import {CustomSelect, Option} from '../../components/CustomSelect/CustomSelect';
import ExcursionsCard from '../../components/ExcursionsCard/ExcursionsCard';
import Filter from '../../components/Filter/Filter';
import Viewed from '../../components/Viewed/Viewed';
import {setIsActiveFilter} from '../../store/slices';
import styles from '../../styles/Catalog.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../../components/PageTitle/PageTitle';
import {Fragment, useState, useEffect} from 'react';
import Form from '../../ui/Form/Form';

const Catalog = ({headerHeight}) => {
	const sorts = {
		'rating': 'рейтингу',
		'popularity': 'популярности',
		'price': 'цене',
		'discount amount': 'размеру скидки',
	};
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	const dispatch = useDispatch();
	const [sortBy, setSortBy] = useState();
	const [options, setOptions] = useState([
		languageFile?.['sorting']?.['rating'],
		languageFile?.['sorting']?.['popularity'],
		languageFile?.['sorting']?.['price'],
		languageFile?.['sorting']?.['discount'],
	]);
	const isActiveFilter = useSelector((state) => state['indexSlice']['isActiveFilter']);
	const [visibleCardsCount, setVisibleCardsCount] = useState(16);
	const [currentVisibleCardsCount, setCurrentVisibleCardsCount] = useState(16);
	
	useEffect(() => {
		setOptions([
			languageFile?.['sorting']?.['rating'],
			languageFile?.['sorting']?.['popularity'],
			languageFile?.['sorting']?.['price'],
			languageFile?.['sorting']?.['discount'],
		]);
	}, [languageFile, setOptions]);
	
	useEffect(() => {
		setSortBy(options[0]);
	}, [options, router.locale]);
	
	const optionsSelectList = options.map((option, index) => (
		<Form.Option
			value={`${option}`}
			onClick={() => setSortBy(option)}
			key={index}
		>
			{option}
		</Form.Option>
	));
	
	const optionsList = options.map((option, index) => (
		<li key={index}>
			<a
				className={`${styles.Catalog__option} ${sortBy === options[index] ? styles.Catalog__option_active : ''}`}
				onClick={() => setSortBy(option)}
			>{option}
			</a>
		</li>
	));
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	const [cards, setCards] = useState([
		{
			popularity: 3,
			city: 'moscow',
			title: 'Экскурсия по Москва-реке',
			image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
			description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			duration: 90,
			jetty: 'Причал “Мост Ломоносова”',
			interval: 30,
			rating: 4.5,
			discountValue: 10,
			tickets: [
				{
					title: 'Взрослый',
					price: 550,
					amountPrice: 450,
				},
				{
					title: 'Детский',
					price: 450,
					amountPrice: 350,
				},
				{
					title: 'Взрослый (с ланчем)',
					price: 580,
					amountPrice: 480,
				},
			],
			id: 0,
		},
		{
			popularity: 2,
			city: 'moscow',
			title: 'Экскурсия по Москва-реке',
			image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
			description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			duration: 90,
			jetty: 'Причал “Мост Ломоносова”',
			interval: 30,
			rating: 4.8,
			discountValue: 10,
			tickets: [
				{
					title: 'Взрослый',
					price: 550,
					amountPrice: 450,
				},
				{
					title: 'Детский',
					price: 450,
					amountPrice: 350,
				},
				{
					title: 'Взрослый (с ланчем)',
					price: 580,
					amountPrice: 480,
				},
			],
			id: 1,
		},
		{
			popularity: 1,
			city: 'moscow',
			title: 'Экскурсия по Москва-реке',
			image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
			description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			duration: 90,
			jetty: 'Причал “Мост Ломоносова”',
			interval: 30,
			rating: 4.6,
			discountValue: 10,
			tickets: [
				{
					title: 'Взрослый',
					price: 450,
					amountPrice: 350,
				},
				{
					title: 'Детский',
					price: 350,
					amountPrice: 250,
				},
				{
					title: 'Взрослый (с ланчем)',
					price: 480,
					amountPrice: 380,
				},
			],
			id: 2,
		},
		{
			popularity: 0,
			city: 'moscow',
			title: 'Экскурсия по Москва-реке',
			image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
			description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			duration: 90,
			jetty: 'Причал “Мост Ломоносова”',
			interval: 30,
			rating: 4.5,
			discountValue: 15,
			tickets: [
				{
					title: 'Взрослый',
					price: 550,
					amountPrice: 450,
				},
				{
					title: 'Детский',
					price: 450,
					amountPrice: 350,
				},
				{
					title: 'Взрослый (с ланчем)',
					price: 580,
					amountPrice: 480,
				},
			],
			id: 3,
		},
	]);
	
	useEffect(() => {
		setCards([
			{
				popularity: 3,
				city: 'moscow',
				title: 'Экскурсия по Москва-реке',
				image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
				description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
				duration: 90,
				jetty: 'Причал “Мост Ломоносова”',
				interval: 30,
				rating: 4.5,
				discountValue: 10,
				tickets: [
					{
						title: 'Взрослый',
						price: 550,
						amountPrice: 450,
					},
					{
						title: 'Детский',
						price: 450,
						amountPrice: 350,
					},
					{
						title: 'Взрослый (с ланчем)',
						price: 580,
						amountPrice: 480,
					},
				],
				id: 0,
			},
			{
				popularity: 2,
				city: 'moscow',
				title: 'Экскурсия по Москва-реке',
				image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
				description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
				duration: 90,
				jetty: 'Причал “Мост Ломоносова”',
				interval: 30,
				rating: 4.8,
				discountValue: 10,
				tickets: [
					{
						title: 'Взрослый',
						price: 550,
						amountPrice: 450,
					},
					{
						title: 'Детский',
						price: 450,
						amountPrice: 350,
					},
					{
						title: 'Взрослый (с ланчем)',
						price: 580,
						amountPrice: 480,
					},
				],
				id: 1,
			},
			{
				popularity: 1,
				city: 'moscow',
				title: 'Экскурсия по Москва-реке',
				image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
				description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
				duration: 90,
				jetty: 'Причал “Мост Ломоносова”',
				interval: 30,
				rating: 4.6,
				discountValue: 10,
				tickets: [
					{
						title: 'Взрослый',
						price: 450,
						amountPrice: 350,
					},
					{
						title: 'Детский',
						price: 350,
						amountPrice: 250,
					},
					{
						title: 'Взрослый (с ланчем)',
						price: 480,
						amountPrice: 380,
					},
				],
				id: 2,
			},
			{
				popularity: 0,
				city: 'moscow',
				title: 'Экскурсия по Москва-реке',
				image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
				description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
				duration: 90,
				jetty: 'Причал “Мост Ломоносова”',
				interval: 30,
				rating: 4.5,
				discountValue: 15,
				tickets: [
					{
						title: 'Взрослый',
						price: 550,
						amountPrice: 450,
					},
					{
						title: 'Детский',
						price: 450,
						amountPrice: 350,
					},
					{
						title: 'Взрослый (с ланчем)',
						price: 580,
						amountPrice: 480,
					},
				],
				id: 3,
			},
		]);
		for (let i = 4; i < 60; i++) {
			setCards((prevState) => [...prevState, {
				popularity: 0,
				city: 'moscow',
				title: 'Экскурсия по Москва-реке',
				image: '/assets/images/upcoming-excursions/upcoming-excursions-image-1.png',
				description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
				duration: 90,
				jetty: 'Причал “Мост Ломоносова”',
				interval: 30,
				rating: 4.5,
				discountValue: 15,
				tickets: [
					{
						title: 'Взрослый',
						price: 550,
						amountPrice: 450,
					},
					{
						title: 'Детский',
						price: 450,
						amountPrice: 350,
					},
					{
						title: 'Взрослый (с ланчем)',
						price: 580,
						amountPrice: 480,
					},
				],
				id: i,
			}]);
		}
	}, []);
	
	const sortFunction = (a, b) => {
		const compareValues = (valueA, valueB, reverse = false) => {
			if (reverse) {
				if (valueA(a) > valueB(b)) return 1;
				if (valueA(a) === valueB(b)) return 0;
				if (valueA(a) < valueB(b)) return -1;
			} else {
				if (valueA(a) < valueB(b)) return 1;
				if (valueA(a) === valueB(b)) return 0;
				if (valueA(a) > valueB(b)) return -1;
			}
		};
		
		const sort = Object.entries(sorts).filter((sort) => {
			if (sort[0] === sortBy || sort[1] === sortBy) {
				return sort[0];
			}
		})[0];
		
		if (sort?.[0] === 'rating') {
			return compareValues(
				(a) => a.rating,
				(b) => b.rating,
			);
		}
		if (sort?.[0] === 'price') return compareValues(
			(a) => a.tickets?.map((ticket) => ticket.amountPrice),
			(b) => b.tickets?.map((ticket) => ticket.amountPrice),
			true,
		);
		if (sort?.[0] === 'discount amount') return compareValues(
			(a) => a.discountValue,
			(b) => b.discountValue,
		);
		if (sort?.[0] === 'popularity') return compareValues(
			(a) => a.popularity,
			(b) => b.popularity,
		);
	};
	
	const [sortedCards, setSortedCards] = useState(cards.sort((a, b) => {
		return sortFunction(a, b);
	}));
	
	useEffect(() => {
		setSortedCards(cards.sort((a, b) => {
			return sortFunction(a, b);
		}));
	}, [cards, setSortedCards]);
	
	const cardsList = sortedCards.slice(0, currentVisibleCardsCount).map((card) => (
		<ExcursionsCard
			cardCity={card.city}
			cardTitle={card.title}
			cardImage={card.image}
			cardDescription={card.description}
			cardDuration={card.duration}
			cardJetty={card.jetty}
			cardInterval={card.interval}
			cardRating={card.rating}
			cardDiscountValue={card.discountValue}
			cardTickets={card.tickets}
			link="/categories/product/"
			small={true}
			catalog={true}
			key={card.id}
		/>
	));
	
	return (
		<div className={styles.Catalog}>
			<Container>
				<header className={`${styles.Catalog__header} ${isActiveFilter ? styles.Catalog__header_hidden : ''}`}>
					<Breadcrumbs/>
					<PageTitle>{languageFile?.['catalog-page']?.['title']}</PageTitle>
				</header>
				<Filter
					headerHeight={headerHeight}
					isActiveFilter={isActiveFilter}
					sortBy={sortBy}
					setSortBy={setSortBy}
					optionsSelectList={optionsSelectList}
				/>
				<div className={styles.Catalog__filter}>
					<div className={styles.Catalog__select}>
						<Form.Select value={sortBy} callback={setSortBy} isSort={true}>
							<Fragment>{optionsSelectList}</Fragment>
						</Form.Select>
					</div>
					<div className={styles.Catalog__sort}>
						<span>{languageFile?.['catalog-page']?.['text-sort']}</span>
						<ul>{optionsList}</ul>
					</div>
					<button onClick={() => dispatch(setIsActiveFilter(true))}>
						<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="2" width="19" height="1" fill="#F0515D"/>
							<rect y="9" width="19" height="1" fill="#F0515D"/>
							<rect x="4.5" y="0.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
							<rect x="11.5" y="7.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
						</svg>
					</button>
				</div>
				<div className={styles.Catalog__list}>{cardsList}</div>
				<footer className={styles.Catalog__footer}>
					<div>
						<span>
							{currentVisibleCardsCount} {languageFile?.['catalog-page']?.['pagination']?.['first-part']} {cards.length} {languageFile?.['catalog-page']?.['pagination']?.['second-part']}
						</span>
						<div className={styles.Catalog__counts}>
							{languageFile?.['catalog-page']?.['text-counts']}
							<CustomSelect value={visibleCardsCount} callback={setVisibleCardsCount} small={true}>
								<Fragment>
									<Option value={16}>16</Option>
									<Option value={24}>24</Option>
									<Option value={32}>32</Option>
								</Fragment>
							</CustomSelect>
						</div>
					</div>
					{currentVisibleCardsCount < cards.length && (
						<Button.Primary
							onClick={() => setCurrentVisibleCardsCount((prevState) => {
								if (prevState + visibleCardsCount <= cards.length) {
									return prevState + visibleCardsCount;
								} else {
									return cards.length;
								}
							})}
						>
							{languageFile?.['catalog-page']?.['text-button']}
						</Button.Primary>
					)}
				</footer>
			</Container>
			<div className={styles.Catalog__viewed}>
				<Viewed/>
			</div>
		</div>
	);
};

export default Catalog;
