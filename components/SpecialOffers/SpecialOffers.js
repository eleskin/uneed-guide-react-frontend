import Link from 'next/link';
import {useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import Container from '../Container/Container';
import ExcursionCard from '../ExcursionCard/ExcursionCard';
import Title from '../Title/Title';
import styles from './SpecialOffers.module.scss';

const SpecialOffers = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	
	const slides = [
		{},
		{},
		{},
		{},
	];
	
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1);
		},
		onSwipedRight: () => {
			activeSlide > 0 && setActiveSlide(activeSlide - 1);
		}
	});
	
	const slidesList = slides.map((slide, index) => (
		<ExcursionCard
			small={true}
			key={index}
		/>
	));
	
	return (
		<div className={styles.SpecialOffers}>
			<Container>
				<Title>Специальные предложения</Title>
				<div className={styles.SpecialOffers__wrapper} {...handlers}>
					<button
						onClick={() => setActiveSlide(activeSlide - 1)}
						disabled={activeSlide <= 0}
					>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 13L2 7L8 1" stroke="#283140" strokeWidth="2" strokeLinecap="round"/>
						</svg>
					</button>
					<div className={styles.SpecialOffers__cards}>
						<div
							className={styles.SpecialOffers__container}
							style={{transform: `translateX(${-100 * activeSlide}%)`}}
						>
							{slidesList}
						</div>
					</div>
					<Link href="#">
						<a className={styles.SpecialOffers__link}>
							Смотреть все<br/>предложения
						</a>
					</Link>
					<button
						onClick={() => setActiveSlide(activeSlide + 1)}
						disabled={activeSlide >= slides.length - 1}
					>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 13L7 7L1 1" stroke="#283140" strokeWidth="2" strokeLinecap="round"/>
						</svg>
					</button>
				</div>
				<footer className={styles.SpecialOffers__footer}>
					<Link href="#">
						<a>
							Все популярные экскурсии
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

export default SpecialOffers;
