import Link from 'next/link';
import {useSwipeable} from 'react-swipeable';
import styles from './CardSlider.module.scss';

const CardSlider = ({children, nextSlide, prevSlide, activeSlide, isDisabledNextButton}) => {
	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	});
	
	return (
		<div className={styles.CardSlider} {...handlers}>
			<button
				onClick={prevSlide}
				disabled={activeSlide <= 0}
			>
				<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 13L2 7L8 1" stroke="#283140" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			</button>
			<div className={styles.CardSlider__cards}>
				<div
					className={styles.CardSlider__container}
					style={{transform: `translateX(${-100 * activeSlide}%)`}}
				>
					{children}
				</div>
			</div>
			<Link href="#">
				<a className={styles.SpecialOffers__link}>
					Смотреть все<br/>предложения
				</a>
			</Link>
			<button
				onClick={nextSlide}
				disabled={isDisabledNextButton}
			>
				<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 13L7 7L1 1" stroke="#283140" strokeWidth="2" strokeLinecap="round"/>
				</svg>
			</button>
		</div>
	);
};

export default CardSlider;
