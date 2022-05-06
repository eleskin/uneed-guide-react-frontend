import Image from 'next/image';
import {Fragment, useEffect, useMemo, useRef, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
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
	
	const tickets = [
		{title: 'Взрослый билет', price: 350, priceDiscount: 450},
		{title: 'Детский билет', price: 250, priceDiscount: 250},
		{title: 'Льготный билет', price: 480, priceDiscount: 480},
	];
	
	const advantages = useMemo(() => (
		<div className={styles.Product__advantages}>
			<div className={styles.Product__advantage}>
				<svg width="38" height="39" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.6">
						<rect x="0.94873" y="0.5" width="34" height="25" rx="2.5" stroke="white"/>
						<rect x="4.69873" y="15.25" width="6.5" height="5.5" rx="0.75" stroke="white" strokeWidth="0.5"/>
						<rect x="0.44873" y="6" width="35" height="5" fill="white"/>
						<rect x="17.4487" y="16" width="12" height="1" rx="0.5" fill="white"/>
						<rect x="17.4487" y="19" width="6" height="1" rx="0.5" fill="white"/>
					</g>
				</svg>
				<span>Все платежи происходят на стороне банка</span>
			</div>
			<div className={styles.Product__advantage}>
				<svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.6">
						<path d="M16.3522 12.202C15.5405 12.921 15.27 13.5031 15.1347 14.77C14.9656 16.3451 14.898 16.3793 13.8158 16.3793H12.666V19.2898C12.666 21.5497 12.8351 22.5427 13.3424 23.5699C15.5067 27.8842 21.9998 27.8842 24.1641 23.5699C24.6714 22.5427 24.8405 21.5497 24.8405 19.2898V16.3793H23.6907C22.6085 16.3793 22.5409 16.3451 22.3718 14.77C22.0336 11.5172 18.6856 10.079 16.3522 12.202ZM20.2413 13.0238C20.8162 13.5374 21.1543 14.2222 21.1882 15.0097L21.2896 16.2081H18.7533H16.2169L16.3184 15.0097C16.386 13.6743 17.6711 12.2705 18.7533 12.2705C19.0914 12.2705 19.7678 12.6129 20.2413 13.0238ZM23.7583 19.6322C23.8598 22.1318 22.9129 24.015 21.1205 24.9738C17.5358 26.9255 13.7144 24.2547 13.6806 19.7692C13.6806 18.7077 13.782 17.749 13.9173 17.612C14.0526 17.5093 16.2845 17.4408 18.8885 17.4751L23.6569 17.5778L23.7583 19.6322Z" fill="white"/>
						<circle cx="19" cy="19.0029" r="16.5" stroke="white"/>
						<circle cx="18.5" cy="35.502" r="2" transform="rotate(-90 18.5 35.502)" fill="#FAFAFA" stroke="white"/>
						<circle cx="18.5" cy="2.5" r="2" transform="rotate(-90 18.5 2.5)" fill="#FAFAFA" stroke="white"/>
						<circle cx="2.5" cy="19.5" r="2" transform="rotate(-90 2.5 19.5)" fill="#FAFAFA" stroke="white"/>
						<circle cx="35.5" cy="19.5" r="2" transform="rotate(-90 35.5 19.5)" fill="#FAFAFA" stroke="white"/>
						<path d="M18.9785 19.3224L18.9785 22.613L20.2872 22.613" stroke="white"/>
					</g>
				</svg>
				<span>Мы не храним данные вашей пластиковой карты</span>
			</div>
			<div className={styles.Product__advantage}>
				<svg width="38" height="39" viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.6">
						<path d="M11.7277 0.588491L11.7278 0.5886L11.7176 0.592403C11.6061 0.634275 11.4767 0.685101 11.3527 0.73377C11.2649 0.768236 11.1799 0.80162 11.106 0.829979C10.979 0.888622 10.7361 1.08441 10.4555 1.41119C10.1833 1.72823 9.92752 2.10793 9.76631 2.4537C9.64072 2.73016 8.8434 4.88588 7.78274 7.81041C6.7268 10.7219 5.42334 14.3572 4.29912 17.5459L4.29912 17.5459L4.29848 17.5477C4.18095 17.8771 4.04138 18.2647 3.90945 18.631C3.77027 19.0175 3.63958 19.3804 3.55222 19.6265L3.55223 19.6265L3.5509 19.6302C2.9057 21.404 2.55918 22.3941 2.41317 22.9409C2.39489 23.0094 2.38109 23.0664 2.37065 23.1136C2.48135 23.1535 2.62828 23.2084 2.80092 23.2741C3.16721 23.4134 3.6574 23.6046 4.18165 23.8132L4.18166 23.8132L4.184 23.8142C4.70735 24.0255 5.19054 24.2104 5.54999 24.3378C5.65445 24.3749 5.7464 24.4063 5.82454 24.4319C5.83799 24.4004 5.85306 24.3641 5.86992 24.3224C6.01929 23.9529 6.26103 23.2789 6.71109 22.0201C6.71114 22.02 6.71119 22.0199 6.71124 22.0197L7.42755 20.0021L7.54567 19.6694H7.89874H12.7065C14.5871 19.6694 15.8002 19.6769 16.5479 19.6962C16.9196 19.7057 17.188 19.7184 17.3695 19.7359C17.4573 19.7443 17.5446 19.7556 17.6193 19.7738C17.6546 19.7824 17.7117 19.7982 17.7715 19.8285C17.8095 19.8477 17.9726 19.932 18.0393 20.1357L18.0393 20.1356L18.0409 20.1408C18.3008 20.9655 18.7054 22.1022 19.0618 23.0431C19.24 23.5134 19.4043 23.93 19.5311 24.2313C19.5579 24.2951 19.5826 24.3527 19.6051 24.4037C19.6979 24.3782 19.8094 24.3444 19.9373 24.3027C20.3298 24.1749 20.8371 23.9868 21.3423 23.7845C21.8476 23.5821 22.3412 23.3695 22.7071 23.194C22.8318 23.1342 22.937 23.081 23.0207 23.0356C23.0137 23.0078 23.0059 22.9781 22.9975 22.9465C22.9427 22.7421 22.8622 22.4811 22.7669 22.2141C22.7215 22.087 22.6686 21.9393 22.6114 21.7801C22.4206 21.2483 22.1835 20.5873 22.0288 20.1304C21.8178 19.5365 20.924 17.0367 20.0301 14.5567L20.0295 14.555C19.4661 12.9744 18.8916 11.3771 18.4955 10.2761C18.2709 9.65153 18.1037 9.18667 18.0286 8.97518L18.0284 8.9746C17.3718 7.11949 16.8128 5.56989 16.3884 4.42416C15.9595 3.26602 15.6787 2.55025 15.5728 2.33392C15.1984 1.58068 14.5847 0.95595 14.1063 0.743637L14.1047 0.742958C13.8599 0.633312 13.3801 0.541197 12.8589 0.510597C12.6069 0.495808 12.3632 0.496506 12.1558 0.512644C11.939 0.529514 11.7969 0.560785 11.7277 0.588491ZM12.0891 6.06566L12.089 6.06564L14.8439 10.7111C14.8439 10.7113 14.844 10.7115 14.844 10.7116C15.2723 12.0159 15.6608 13.2139 15.9424 14.0925C16.0831 14.5318 16.1974 14.892 16.2767 15.1462C16.3163 15.273 16.3476 15.3749 16.3692 15.4476C16.3799 15.4835 16.3891 15.515 16.3958 15.5398C16.3991 15.5517 16.4029 15.5659 16.4062 15.58C16.4078 15.5868 16.4104 15.5979 16.4128 15.6109L16.4129 15.6114C16.4139 15.6169 16.4216 15.6569 16.4216 15.7059C16.4216 15.9204 16.2938 16.0494 16.2388 16.0953C16.1798 16.1446 16.1227 16.1695 16.0977 16.1798C16.043 16.2022 15.9915 16.2131 15.9645 16.2184C15.9025 16.2305 15.8285 16.2389 15.7541 16.2455C15.6 16.2591 15.3804 16.2702 15.1042 16.2792C14.5488 16.2972 13.7339 16.3073 12.6866 16.3073C11.7941 16.3073 10.9831 16.3022 10.3944 16.2946C10.1005 16.2908 9.86003 16.2863 9.69198 16.2814C9.60874 16.279 9.53923 16.2764 9.48865 16.2735C9.46486 16.2721 9.43708 16.2702 9.41167 16.2673C9.40174 16.2662 9.37571 16.2632 9.34561 16.2564L9.34556 16.2564C9.3344 16.2538 9.29453 16.2448 9.24768 16.2238C9.22609 16.2141 9.17316 16.1889 9.11813 16.1396C9.06559 16.0925 8.95155 15.9677 8.95155 15.7668C8.95155 15.7241 8.95729 15.6907 8.95827 15.6847C8.96031 15.6722 8.96242 15.6622 8.96363 15.6567C8.96611 15.6453 8.96862 15.6356 8.97008 15.63C8.97322 15.618 8.97683 15.6053 8.98008 15.5942C8.98684 15.571 8.99613 15.5404 9.00726 15.5044C9.02974 15.4316 9.0623 15.3282 9.10323 15.1996C9.18522 14.9419 9.30227 14.578 9.44285 14.1431C9.7241 13.2731 10.1003 12.1165 10.4805 10.9516C11.2372 8.63316 12.0193 6.2516 12.0891 6.06566Z" stroke="white"/>
						<path d="M1.42499 32.3539C1.42496 32.3538 1.42451 32.3555 1.42373 32.3591C1.42463 32.3559 1.42502 32.354 1.42499 32.3539ZM1.39891 32.5664C1.3884 32.6921 1.37931 32.855 1.37197 33.0466C1.35545 33.4776 1.3486 34.031 1.35108 34.5831C1.35356 35.1353 1.36535 35.6795 1.38549 36.0921C1.39129 36.211 1.39768 36.3166 1.4045 36.4068C1.56677 36.4138 1.77864 36.4206 2.03587 36.4271C2.68075 36.4432 3.59539 36.4567 4.69159 36.4675C6.88321 36.4892 9.7924 36.5 12.7024 36.5C15.6125 36.5 18.5217 36.4892 20.7133 36.4675C21.8095 36.4567 22.7241 36.4432 23.369 36.4271C23.6262 36.4206 23.8381 36.4138 24.0004 36.4068C24.0072 36.3166 24.0136 36.211 24.0194 36.0921C24.0395 35.6795 24.0513 35.1353 24.0538 34.5831C24.0563 34.031 24.0494 33.4776 24.0329 33.0466C24.0256 32.855 24.0165 32.6921 24.006 32.5664C23.7974 32.5486 23.4372 32.5343 22.8096 32.5241C21.3163 32.5 18.4099 32.5 12.7024 32.5C6.99494 32.5 4.0886 32.5 2.59524 32.5241C1.96765 32.5343 1.60751 32.5486 1.39891 32.5664ZM23.9799 32.3539C23.9799 32.354 23.9803 32.3559 23.9811 32.3591C23.9804 32.3554 23.9799 32.3538 23.9799 32.3539Z" stroke="white"/>
					</g>
				</svg>
				<span>Все платежи совершаются через платежные системы банков</span>
			</div>
		</div>
	), []);
	
	return (
		<div className={styles.Product}>
			<ProductSlider/>
			<div className={styles.Product__container}>
				<div>
					<Container>
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
					</Container>
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
								<BuyTicket tickets={tickets}>
									{advantages}
								</BuyTicket>
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
							<div className={styles.Product__prices}>
								{tickets.map((ticket, index) => (
									<div key={index}>
										<span>{ticket.title}</span>
										<div>
											<em>{ticket.price} ₽</em>
											<i>{ticket.priceDiscount} ₽</i>
										</div>
									</div>
								))}
							</div>
							<footer>
								<Button.Primary>Приобрести билет</Button.Primary>
							</footer>
						</div>
						<div>
							{advantages}
						</div>
					</div>
				</div>
			</div>
			<Viewed/>
			<div
				className={`${styles.Product__button_fixed} ${isIntersecting ? styles.Product__button_hidden : ''}`}
			>
				<Button.Primary>
					Купить билет
				</Button.Primary>
			</div>
		</div>
	);
};

export default Product;
