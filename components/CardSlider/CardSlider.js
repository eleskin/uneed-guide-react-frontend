import Link from 'next/link';
import {createRef, useEffect, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import styles from './CardSlider.module.scss';
import {useMediaQuery} from 'react-responsive';

const CardSlider = ({children, nextSlide, prevSlide, activeSlide, isDisabledNextButton, isLimitedOpportunities = false}) => {
	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	});
	
	const isLargeScreen = useMediaQuery({query: '(min-width: 960px)'});
	
	const [slideWidth, setSlideWidth] = useState(0);
	
	const sliderContainerRef = createRef();
	
	useEffect(() => {
		if (isLimitedOpportunities) {
			setSlideWidth(parseFloat(window.getComputedStyle(sliderContainerRef.current.children[0]).width));
		}
	}, [sliderContainerRef]);
	
	return (
		<div
			className={`${styles.CardSlider} ${isLimitedOpportunities ? styles.CardSlider_invalid : ''}`}
			{...handlers}
		>
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
					style={{
						transform: isLimitedOpportunities && isLargeScreen ?
							`translateX(${-slideWidth * activeSlide - 24 * activeSlide}px)` :
							`translateX(${-100 * activeSlide}%)`
					}}
					ref={sliderContainerRef}
				>
					{children}
				</div>
			</div>
			{!isLimitedOpportunities && (
				<Link href="#">
					<a className={styles.SpecialOffers__link}>
						Смотреть все<br/>предложения
					</a>
				</Link>
			)}
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
