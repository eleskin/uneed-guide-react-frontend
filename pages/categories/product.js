import Image from 'next/image';
import {Fragment, useState} from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import styles from '../../styles/Product.module.scss';
import Viewed from '../../components/Viewed/Viewed';

const Product = () => {
	const [isExpandedText, setIsExpandedText] = useState(false);
	const [isVisibleHiddenPlaces, setIsVisibleHiddenPlaces] = useState(false);
	const [isVisibleHiddenEvents, setIsVisibleHiddenEvents] = useState(false);
	
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
				</div>
			</div>
		);
	});
	
	return (
		<div className={styles.Product}>
			<ProductSlider/>
			<div className={styles.Product__container}>
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
								<h4>Место встречи</h4>
								<span className={styles.Product__span}>Пресненская набережная, 2, причал №2</span>
								<h4>Продолжительность</h4>
								<span className={styles.Product__span}>1 час 30 минут</span>
								<h4>Возраст</h4>
								<span className={styles.Product__span}>8+</span>
								<h4>Туроператор</h4>
								<span className={styles.Product__span}>Нева Тревел</span>
								<h4>Возрастная категория</h4>
								<span className={styles.Product__span}>От 3х лет</span>
							</div>
						</CardContainer>
						<CardContainer>
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
								<h3>Теплоход</h3>
								<p className={styles.Product__paragraph_light}>Теплоходы с двумя палубами: нижней и верхней. На нижней
								                                               располагается закрытая часть и бар, на верхней - открытая
								                                               и закрытая части.</p>
								<h5>Удобства</h5>
								<span className={styles.Product__span_small}>Туалет, панорамные окна</span>
								<h5>Количества мест</h5>
								<span className={styles.Product__span_small}>72</span>
								<h5>Тип теплохода</h5>
								<span className={styles.Product__span_small}>Двухпалубный</span>
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
					</div>
				</Container>
			</div>
			<Viewed/>
		</div>
	);
};

export default Product;
