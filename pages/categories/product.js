import Image from 'next/image';
import {Fragment, useEffect, useRef, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import BuyTicket from '../../components/BuyTicket/BuyTicket';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import styles from '../../styles/Product.module.scss';
import Viewed from '../../components/Viewed/Viewed';

const Product = () => {
	const [isExpandedText, setIsExpandedText] = useState(false);
	const [isVisibleHiddenPlaces, setIsVisibleHiddenPlaces] = useState(false);
	const [isVisibleHiddenEvents, setIsVisibleHiddenEvents] = useState(false);
	const [activeDiscount, setActiveDiscount] = useState(0);
	
	const places = [
		'Красная площадь',
		'Новый Арбат',
		'Храм Христа Спасителя',
		'Москва-сити',
		'Воробьевы горы',
		'Смотровая площадка',
		'Патриарший мост',
		'Красная площадь',
		'Новый Арбат',
		'Храм Христа Спасителя',
		'Москва-сити',
		'Воробьевы горы',
		'Смотровая площадка',
		'Патриарший мост',
	];
	
	const placesList = places.map((place, index) => {
		if (index === 7 && places.length - 1 > 7) {
			return (
				<Fragment key={index}>
					<li
						className={`
							${styles.Product__place}
							${styles.Product__place_more}
							${isVisibleHiddenPlaces ? styles.Product__place_hidden : ''}
						`}
					>
						<button onClick={() => setIsVisibleHiddenPlaces(true)}>И еще +{places.length - index} мест</button>
					</li>
					<li
						className={`${styles.Product__place} ${!isVisibleHiddenPlaces ? styles.Product__place_hidden : ''}`}
					>
						{place}
					</li>
				</Fragment>
			);
		} else {
			return (
				<li
					className={`
						${styles.Product__place}
						${(index > 7 && !isVisibleHiddenPlaces) ? styles.Product__place_hidden : ''}
					`}
					key={index}
				>
					{place}
				</li>
			);
		}
	});
	
	const events = [
		{
			title: '“Салют с борта теплохода на 9 мая',
			info: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			date: '09 мая',
			time: '14:00 - 19:00',
		},
		{
			title: '“Салют с борта теплохода на 9 мая',
			info: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			date: '09 мая',
			time: '14:00 - 19:00',
		},
		{
			title: '“Салют с борта теплохода на 9 мая',
			info: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			date: '09 мая',
			time: '14:00 - 19:00',
		},
		{
			title: '“Салют с борта теплохода на 9 мая',
			info: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			date: '09 мая',
			time: '14:00 - 19:00',
		},
		{
			title: '“Салют с борта теплохода на 9 мая',
			info: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
			date: '09 мая',
			time: '14:00 - 19:00',
		},
	];
	
	const eventsList = events.map((event, index) => {
		return (
			<div
				className={`${styles.Product__event} ${(index >= 2 && !isVisibleHiddenEvents) ? styles.Product__event_hidden : ''}`}
				key={index}
			>
				<header>
					<span>{event.title}</span>
					<i>
						<svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3" cy="1" r="1" fill="white"/>
							<path d="M2 3H4V9H2V5L0 3H2Z" fill="white"/>
						</svg>
					</i>
					<p className={styles.Product__paragraph_light}>{event.info}</p>
				</header>
				<div>
					<div>
						<h5>Доступная дата</h5>
						<span>{event.date}</span>
					</div>
					<div>
						<h5>Интервал события</h5>
						<span>{event.time}</span>
					</div>
					<i>
						<svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="3" cy="1" r="1" fill="white"/>
							<path d="M2 3H4V9H2V5L0 3H2Z" fill="white"/>
						</svg>
					</i>
					<p className={styles.Product__paragraph_light}>{event.info}</p>
				</div>
			</div>
		);
	});
	
	const discounts = [
		{
			title: 'Вернем до 20% от цены билета\nпри оплате картой системой\n“МИР”',
			background: '/assets/images/discounts/discount-background-1.svg',
			label: 'Покупайте с выгодой',
		},
		{
			title: 'Скидка 10% для первой\nпоездки на любую экскурсию',
			background: '/assets/images/discounts/discount-background-2.png',
			label: '',
		},
	];
	
	const discountsList = discounts.map((discount, index) => (
		<div
			className={styles.Product__discount}
			style={{backgroundImage: `url(${discount.background})`}}
			key={index}
		>
			{discount.label && <i>{discount.label}</i>}
			<span>{discount.title}</span>
		</div>
	));
	
	const nextDiscount = () => {
		activeDiscount < discounts.length - 1 && setActiveDiscount(activeDiscount + 1);
	};
	
	const prevDiscount = () => {
		activeDiscount > 0 && setActiveDiscount(activeDiscount - 1);
	};
	
	const handlers = useSwipeable({
		onSwipedLeft: nextDiscount,
		onSwipedRight: prevDiscount,
	});
	
	const [isOpenedReviews, setIsOpenedReviews] = useState(false);
	
	const reviews = [
		{
			photo: '/assets/images/reviews/review-image-1.png',
			name: 'Мария В.',
			date: '03 апреля 2022',
			rating: '5.0',
			text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется\nРыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется',
		},
		{
			photo: '/assets/images/reviews/review-image-2.png',
			name: 'Андрей С.',
			date: '01 апреля 2022',
			rating: '4.0',
			text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
		},
		{
			photo: '',
			name: 'Андрей С.',
			date: '01 апреля 2022',
			rating: '4.0',
			text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
		},
		{
			photo: '/assets/images/reviews/review-image-2.png',
			name: 'Андрей С.',
			date: '01 апреля 2022',
			rating: '4.0',
			text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется\nРыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется',
		},
		{
			photo: '',
			name: 'Андрей С.',
			date: '01 апреля 2022',
			rating: '4.0',
			text: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.',
		},
	];
	
	const reviewsList = reviews.map((review, index) => {
		const [isOpenedText, setIsOpenedText] = useState(false);
		const rating = [];
		
		for (let count = 0; count < 10; count++) {
			rating.push(Math.round(Number(review.rating) / 0.5) > count);
		}
		
		return (
			<div
				className={`
					${styles.Product__review}
					${index > 2 && !isOpenedReviews ? styles.Product__review_hidden : ''}
					${isOpenedText ? styles.Product__review_opened : ''}
				`}
				key={index}
			>
				<header>
					<div>
						{review.photo ? <Image src={`${review.photo}`} width={36} height={36} alt=""/> : <i>{review.name[0]}</i>}
						<div>
							<span>{review.name}</span>
							<i>{review.date}</i>
						</div>
					</div>
					<span className={styles.Product__rating}>
						<svg width="61" height="12" viewBox="0 0 61 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.18188 0.883924C6.18188 0.724495 5.958 0.689037 5.90874 0.840662L4.7899 4.28409C4.74974 4.4077 4.63455 4.49139 4.50458 4.49139H0.92332C0.632703 4.49139 0.511871 4.86327 0.746985 5.03409L3.64429 7.13911C3.74943 7.2155 3.79343 7.35091 3.75327 7.47452L2.6466 10.8805C2.55679 11.1569 2.87314 11.3867 3.10825 11.2159L6.05822 9.07263C6.13591 9.01618 6.18188 8.92595 6.18188 8.82992V0.883924Z" fill={rating[0] ? '#f0515d' : '#e0deda'}/>
							<path d="M6 0.883924C6 0.724495 6.22388 0.689037 6.27315 0.840662L7.39199 4.28409C7.43215 4.4077 7.54734 4.49139 7.6773 4.49139H11.2586C11.5492 4.49139 11.67 4.86327 11.4349 5.03409L8.5376 7.13911C8.43245 7.2155 8.38846 7.35091 8.42862 7.47452L9.53529 10.8805C9.62509 11.1569 9.30875 11.3867 9.07364 11.2159L6.12366 9.07263C6.04597 9.01618 6 8.92595 6 8.82992V0.883924Z" fill={rating[1] ? '#f0515d' : '#e0deda'}/>
							<path d="M18.1819 0.883924C18.1819 0.724495 17.958 0.689037 17.9087 0.840662L16.7899 4.28409C16.7497 4.4077 16.6345 4.49139 16.5046 4.49139H12.9233C12.6327 4.49139 12.5119 4.86327 12.747 5.03409L15.6443 7.13911C15.7494 7.2155 15.7934 7.35091 15.7533 7.47452L14.6466 10.8805C14.5568 11.1569 14.8731 11.3867 15.1082 11.2159L18.0582 9.07263C18.1359 9.01618 18.1819 8.92595 18.1819 8.82992V0.883924Z" fill={rating[2] ? '#f0515d' : '#e0deda'}/>
							<path d="M18 0.883924C18 0.724495 18.2239 0.689037 18.2731 0.840662L19.392 4.28409C19.4321 4.4077 19.5473 4.49139 19.6773 4.49139H23.2586C23.5492 4.49139 23.67 4.86327 23.4349 5.03409L20.5376 7.13911C20.4325 7.2155 20.3885 7.35091 20.4286 7.47452L21.5353 10.8805C21.6251 11.1569 21.3087 11.3867 21.0736 11.2159L18.1237 9.07263C18.046 9.01618 18 8.92595 18 8.82992V0.883924Z" fill={rating[3] ? '#f0515d' : '#e0deda'}/>
							<path d="M30.1819 0.883924C30.1819 0.724495 29.958 0.689037 29.9087 0.840662L28.7899 4.28409C28.7497 4.4077 28.6345 4.49139 28.5046 4.49139H24.9233C24.6327 4.49139 24.5119 4.86327 24.747 5.03409L27.6443 7.13911C27.7494 7.2155 27.7934 7.35091 27.7533 7.47452L26.6466 10.8805C26.5568 11.1569 26.8731 11.3867 27.1082 11.2159L30.0582 9.07263C30.1359 9.01618 30.1819 8.92595 30.1819 8.82992V0.883924Z" fill={rating[4] ? '#f0515d' : '#e0deda'}/>
							<path d="M30 0.883924C30 0.724495 30.2239 0.689037 30.2731 0.840662L31.392 4.28409C31.4321 4.4077 31.5473 4.49139 31.6773 4.49139H35.2586C35.5492 4.49139 35.67 4.86327 35.4349 5.03409L32.5376 7.13911C32.4325 7.2155 32.3885 7.35091 32.4286 7.47452L33.5353 10.8805C33.6251 11.1569 33.3087 11.3867 33.0736 11.2159L30.1237 9.07263C30.046 9.01618 30 8.92595 30 8.82992V0.883924Z" fill={rating[5] ? '#f0515d' : '#e0deda'}/>
							<path d="M42.1819 0.883924C42.1819 0.724495 41.958 0.689037 41.9087 0.840662L40.7899 4.28409C40.7497 4.4077 40.6345 4.49139 40.5046 4.49139H36.9233C36.6327 4.49139 36.5119 4.86327 36.747 5.03409L39.6443 7.13911C39.7494 7.2155 39.7934 7.35091 39.7533 7.47452L38.6466 10.8805C38.5568 11.1569 38.8731 11.3867 39.1082 11.2159L42.0582 9.07263C42.1359 9.01618 42.1819 8.92595 42.1819 8.82992V0.883924Z" fill={rating[6] ? '#f0515d' : '#e0deda'}/>
							<path d="M42 0.883924C42 0.724495 42.2239 0.689037 42.2731 0.840662L43.392 4.28409C43.4321 4.4077 43.5473 4.49139 43.6773 4.49139H47.2586C47.5492 4.49139 47.67 4.86327 47.4349 5.03409L44.5376 7.13911C44.4325 7.2155 44.3885 7.35091 44.4286 7.47452L45.5353 10.8805C45.6251 11.1569 45.3087 11.3867 45.0736 11.2159L42.1237 9.07263C42.046 9.01618 42 8.92595 42 8.82992V0.883924Z" fill={rating[7] ? '#f0515d' : '#e0deda'}/>
							<path d="M54.1819 0.883924C54.1819 0.724495 53.958 0.689037 53.9087 0.840662L52.7899 4.28409C52.7497 4.4077 52.6345 4.49139 52.5046 4.49139H48.9233C48.6327 4.49139 48.5119 4.86327 48.747 5.03409L51.6443 7.13911C51.7494 7.2155 51.7934 7.35091 51.7533 7.47452L50.6466 10.8805C50.5568 11.1569 50.8731 11.3867 51.1082 11.2159L54.0582 9.07263C54.1359 9.01618 54.1819 8.92595 54.1819 8.82992V0.883924Z" fill={rating[8] ? '#f0515d' : '#e0deda'}/>
							<path d="M54 0.883924C54 0.724495 54.2239 0.689037 54.2731 0.840662L55.392 4.28409C55.4321 4.4077 55.5473 4.49139 55.6773 4.49139H59.2586C59.5492 4.49139 59.67 4.86327 59.4349 5.03409L56.5376 7.13911C56.4325 7.2155 56.3885 7.35091 56.4286 7.47452L57.5353 10.8805C57.6251 11.1569 57.3087 11.3867 57.0736 11.2159L54.1237 9.07263C54.046 9.01618 54 8.92595 54 8.82992V0.883924Z" fill={rating[9] ? '#f0515d' : '#e0deda'}/>
						</svg>
					<em>{review.rating}</em>
				</span>
				</header>
				{review.text.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
				{review.text.split('\n').length > 1 && !isOpenedText && (
					<button onClick={() => setIsOpenedText(true)}>Читать далее</button>
				)}
			</div>
		);
	});
	
	const [totalRating] = useState(reviews.reduce((accumulator, review) => accumulator + Number(review.rating), 0));
	const [rating, setRating] = useState([]);
	
	useEffect(() => {
		setRating([]);
		for (let count = 0; count < 10; count++) {
			setRating((prevState) => [...prevState, Math.round(totalRating / reviews.length / 0.5) > count]);
		}
	}, [setRating, totalRating, reviews.length]);
	
	const buyTicketRef = useRef(null);
	const [isIntersecting, setIsIntersecting] = useState(false);
	
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsIntersecting(entry.isIntersecting);
		}, {
			root: null,
			threshold: 0,
		});
		
		observer.observe(buyTicketRef.current);
	}, []);
	
	return (
		<div className={styles.Product}>
			<ProductSlider/>
			<Container>
				<div className={styles.Product__container}>
					<div>
						<Breadcrumbs/>
						<h1 className={styles.Product__title}>По москва-реке на теплоходе</h1>
						<ul className={styles.Product__info}>
							<li>вт 15 мар</li>
							<li>08:00 - 19:30</li>
							<li>6 причалов</li>
						</ul>
						<div className={styles.Product__description}>
							<CardContainer>
								<h2>О событии</h2>
								<div className={styles.Product__text}>
									<p className={styles.Product__paragraph}>Рыбатекст используется дизайнерами, проектировщиками и
									                                         фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст
									                                         используется дизайнерами, проектировщиками и фронтендерами,
									                                         когда нужно быстро заполнить макеты.</p>
									<p className={`${styles.Product__paragraph} ${isExpandedText ? styles.Product__paragraph_active : ''}`}>
										Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить
										макеты. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро
										заполнить макеты.
									</p>
								</div>
								<button className={styles.Product__button_expand} onClick={() => setIsExpandedText(!isExpandedText)}>
									{!isExpandedText ? 'Читать полностью' : 'Свернуть'}
								</button>
							</CardContainer>
							<CardContainer>
								<div className={styles.Product__survey}>
									<div>
										<h4>Место встречи</h4>
										<span className={styles.Product__span}>Пресненская набережная, 2, причал №2</span>
									</div>
									<div>
										<h4>Продолжительность</h4>
										<span className={styles.Product__span}>1 час 30 минут</span>
									</div>
									<div>
										<h4>Возраст</h4>
										<span className={styles.Product__span}>8+</span>
									</div>
									<div>
										<h4>Туроператор</h4>
										<span className={styles.Product__span}>Нева Тревел</span>
									</div>
									<div>
										<h4>Возрастная категория</h4>
										<span className={styles.Product__span}>От 3х лет</span>
									</div>
								</div>
							</CardContainer>
							<CardContainer>
								<div className={styles.Product__transport}>
									<h2>Транспорт</h2>
									<div className={styles.Product__illustration}>
										<Image
											src="/assets/images/product/product-image-1.png"
											width={340}
											height={300}
											layout="fill"
											objectFit="cover"
											alt=""
										/>
									</div>
									<div className={styles.Product__survey}>
										<div>
											<h3>Теплоход</h3>
											<p className={styles.Product__paragraph_light}>Теплоходы с двумя палубами: нижней и верхней. На
											                                               нижней
											                                               располагается закрытая часть и бар, на верхней -
											                                               открытая
											                                               и закрытая части.</p>
										</div>
										<div>
											<h5>Удобства</h5>
											<span className={styles.Product__span_small}>Туалет, панорамные окна</span>
										</div>
										<div>
											<h5>Количества мест</h5>
											<span className={styles.Product__span_small}>72</span>
										</div>
										<div>
											<h5>Тип теплохода</h5>
											<span className={styles.Product__span_small}>Двухпалубный</span>
										</div>
									</div>
								</div>
							</CardContainer>
							<CardContainer>
								<h2>Список достопримечательностей</h2>
								<ul className={styles.Product__places}>
									{placesList}
								</ul>
							</CardContainer>
							<CardContainer>
								<h2>События</h2>
								<div className={styles.Product__events}>
									{eventsList}
									{(events.length > 2 && !isVisibleHiddenEvents) && (
										<button
											onClick={() => setIsVisibleHiddenEvents(true)}
										>
											И еще {events.length - 2} события
										</button>
									)}
								</div>
							</CardContainer>
							<CardContainer>
								<h2>Маршрут экскурсии</h2>
								<div className={styles.Product__map}>
									<Image
										src="/assets/images/product/product-map.png"
										layout="fill"
										objectFit="cover"
										alt=""
									/>
								</div>
							</CardContainer>
						</div>
						<div className={styles.Product__discounts} {...handlers}>
							<div>
								<div style={{transform: `translateX(calc(${-100 * activeDiscount}% - ${0.75 * activeDiscount}rem))`}}>
									{discountsList}
								</div>
							</div>
							<div>
								{discounts.map((discount, index) => (
									<span
										key={index}
										style={activeDiscount === index ? {backgroundColor: 'rgba(33, 38, 50, 0.5)'} : null}
										onClick={() => setActiveDiscount(index)}
									/>
								))}
							</div>
						</div>
						<Container>
							<div className={styles.Product__description}>
								<div ref={buyTicketRef}>
									<BuyTicket/>
								</div>
								<CardContainer>
									<div className={styles.Product__warning}>
										<header>
											<strong>Внимание!</strong>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 0C5.36705 0 0 5.36752 0 12C0 18.633 5.36752 24 12 24C18.633 24 24 18.6325 24 12C24 5.36705 18.6325 0 12 0ZM12 22.125C6.40345 22.125 1.875 17.5962 1.875 12C1.875 6.40345 6.40383 1.875 12 1.875C17.5965 1.875 22.125 6.40383 22.125 12C22.125 17.5965 17.5962 22.125 12 22.125Z" fill="#51ADF0"/>
												<path d="M12 6.04109C11.4822 6.04109 11.0625 6.46081 11.0625 6.97859V13.0158C11.0625 13.5335 11.4822 13.9533 12 13.9533C12.5178 13.9533 12.9375 13.5335 12.9375 13.0158V6.97859C12.9375 6.46081 12.5178 6.04109 12 6.04109Z" fill="#51ADF0"/>
												<path d="M12 17.6325C12.699 17.6325 13.2656 17.0658 13.2656 16.3668C13.2656 15.6679 12.699 15.1012 12 15.1012C11.301 15.1012 10.7344 15.6679 10.7344 16.3668C10.7344 17.0658 11.301 17.6325 12 17.6325Z" fill="#51ADF0"/>
											</svg>
											<p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро
											   заполнить
											   макеты.</p>
										</header>
										<ul>
											<li>Дети до 6-ти лет не допускаются на данный вид экскурсии.</li>
											<li>На экскурсию нельзя брать животных</li>
										</ul>
									</div>
								</CardContainer>
								<CardContainer>
									<div className={styles.Product__reviews}>
										<header>
											<h2>Отзывы</h2>
											<div>
												<span>Общая оценка</span>
												<span className={styles.Product__rating}>
											<svg width="61" height="12" viewBox="0 0 61 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M6.18188 0.883924C6.18188 0.724495 5.958 0.689037 5.90874 0.840662L4.7899 4.28409C4.74974 4.4077 4.63455 4.49139 4.50458 4.49139H0.92332C0.632703 4.49139 0.511871 4.86327 0.746985 5.03409L3.64429 7.13911C3.74943 7.2155 3.79343 7.35091 3.75327 7.47452L2.6466 10.8805C2.55679 11.1569 2.87314 11.3867 3.10825 11.2159L6.05822 9.07263C6.13591 9.01618 6.18188 8.92595 6.18188 8.82992V0.883924Z" fill={rating[0] ? '#f0515d' : '#e0deda'}/>
												<path d="M6 0.883924C6 0.724495 6.22388 0.689037 6.27315 0.840662L7.39199 4.28409C7.43215 4.4077 7.54734 4.49139 7.6773 4.49139H11.2586C11.5492 4.49139 11.67 4.86327 11.4349 5.03409L8.5376 7.13911C8.43245 7.2155 8.38846 7.35091 8.42862 7.47452L9.53529 10.8805C9.62509 11.1569 9.30875 11.3867 9.07364 11.2159L6.12366 9.07263C6.04597 9.01618 6 8.92595 6 8.82992V0.883924Z" fill={rating[1] ? '#f0515d' : '#e0deda'}/>
												<path d="M18.1819 0.883924C18.1819 0.724495 17.958 0.689037 17.9087 0.840662L16.7899 4.28409C16.7497 4.4077 16.6345 4.49139 16.5046 4.49139H12.9233C12.6327 4.49139 12.5119 4.86327 12.747 5.03409L15.6443 7.13911C15.7494 7.2155 15.7934 7.35091 15.7533 7.47452L14.6466 10.8805C14.5568 11.1569 14.8731 11.3867 15.1082 11.2159L18.0582 9.07263C18.1359 9.01618 18.1819 8.92595 18.1819 8.82992V0.883924Z" fill={rating[2] ? '#f0515d' : '#e0deda'}/>
												<path d="M18 0.883924C18 0.724495 18.2239 0.689037 18.2731 0.840662L19.392 4.28409C19.4321 4.4077 19.5473 4.49139 19.6773 4.49139H23.2586C23.5492 4.49139 23.67 4.86327 23.4349 5.03409L20.5376 7.13911C20.4325 7.2155 20.3885 7.35091 20.4286 7.47452L21.5353 10.8805C21.6251 11.1569 21.3087 11.3867 21.0736 11.2159L18.1237 9.07263C18.046 9.01618 18 8.92595 18 8.82992V0.883924Z" fill={rating[3] ? '#f0515d' : '#e0deda'}/>
												<path d="M30.1819 0.883924C30.1819 0.724495 29.958 0.689037 29.9087 0.840662L28.7899 4.28409C28.7497 4.4077 28.6345 4.49139 28.5046 4.49139H24.9233C24.6327 4.49139 24.5119 4.86327 24.747 5.03409L27.6443 7.13911C27.7494 7.2155 27.7934 7.35091 27.7533 7.47452L26.6466 10.8805C26.5568 11.1569 26.8731 11.3867 27.1082 11.2159L30.0582 9.07263C30.1359 9.01618 30.1819 8.92595 30.1819 8.82992V0.883924Z" fill={rating[4] ? '#f0515d' : '#e0deda'}/>
												<path d="M30 0.883924C30 0.724495 30.2239 0.689037 30.2731 0.840662L31.392 4.28409C31.4321 4.4077 31.5473 4.49139 31.6773 4.49139H35.2586C35.5492 4.49139 35.67 4.86327 35.4349 5.03409L32.5376 7.13911C32.4325 7.2155 32.3885 7.35091 32.4286 7.47452L33.5353 10.8805C33.6251 11.1569 33.3087 11.3867 33.0736 11.2159L30.1237 9.07263C30.046 9.01618 30 8.92595 30 8.82992V0.883924Z" fill={rating[5] ? '#f0515d' : '#e0deda'}/>
												<path d="M42.1819 0.883924C42.1819 0.724495 41.958 0.689037 41.9087 0.840662L40.7899 4.28409C40.7497 4.4077 40.6345 4.49139 40.5046 4.49139H36.9233C36.6327 4.49139 36.5119 4.86327 36.747 5.03409L39.6443 7.13911C39.7494 7.2155 39.7934 7.35091 39.7533 7.47452L38.6466 10.8805C38.5568 11.1569 38.8731 11.3867 39.1082 11.2159L42.0582 9.07263C42.1359 9.01618 42.1819 8.92595 42.1819 8.82992V0.883924Z" fill={rating[6] ? '#f0515d' : '#e0deda'}/>
												<path d="M42 0.883924C42 0.724495 42.2239 0.689037 42.2731 0.840662L43.392 4.28409C43.4321 4.4077 43.5473 4.49139 43.6773 4.49139H47.2586C47.5492 4.49139 47.67 4.86327 47.4349 5.03409L44.5376 7.13911C44.4325 7.2155 44.3885 7.35091 44.4286 7.47452L45.5353 10.8805C45.6251 11.1569 45.3087 11.3867 45.0736 11.2159L42.1237 9.07263C42.046 9.01618 42 8.92595 42 8.82992V0.883924Z" fill={rating[7] ? '#f0515d' : '#e0deda'}/>
												<path d="M54.1819 0.883924C54.1819 0.724495 53.958 0.689037 53.9087 0.840662L52.7899 4.28409C52.7497 4.4077 52.6345 4.49139 52.5046 4.49139H48.9233C48.6327 4.49139 48.5119 4.86327 48.747 5.03409L51.6443 7.13911C51.7494 7.2155 51.7934 7.35091 51.7533 7.47452L50.6466 10.8805C50.5568 11.1569 50.8731 11.3867 51.1082 11.2159L54.0582 9.07263C54.1359 9.01618 54.1819 8.92595 54.1819 8.82992V0.883924Z" fill={rating[8] ? '#f0515d' : '#e0deda'}/>
												<path d="M54 0.883924C54 0.724495 54.2239 0.689037 54.2731 0.840662L55.392 4.28409C55.4321 4.4077 55.5473 4.49139 55.6773 4.49139H59.2586C59.5492 4.49139 59.67 4.86327 59.4349 5.03409L56.5376 7.13911C56.4325 7.2155 56.3885 7.35091 56.4286 7.47452L57.5353 10.8805C57.6251 11.1569 57.3087 11.3867 57.0736 11.2159L54.1237 9.07263C54.046 9.01618 54 8.92595 54 8.82992V0.883924Z" fill={rating[9] ? '#f0515d' : '#e0deda'}/>
											</svg>
											<em>{totalRating / reviews.length}</em>
										</span>
											</div>
										</header>
										{reviewsList}
										{reviews.length > 3 && !isOpenedReviews && (
											<button onClick={() => setIsOpenedReviews(true)}>Смотреть все {reviews.length} отзыва</button>)}
									</div>
								</CardContainer>
							</div>
						</Container>
					</div>
					<div>
						<div className={styles.Product__price}>
							<div className={styles.Product__card}>
								<header>
									<span>Стоимость билетов</span>
								</header>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Viewed/>
			<button
				className={`${styles.Product__button_fixed} ${isIntersecting ? styles.Product__button_hidden : ''}`}
			>Купить билет
			</button>
		</div>
	);
};

export default Product;
