import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import styles from './CardSlider.module.scss';

const CardSlider = ({children, nextSlide, prevSlide, activeSlide, setActiveSlide, isDisabledNextButton}) => {
	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	});
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		window.addEventListener('resize', () => {
			setActiveSlide(0);
		});
	}, [setActiveSlide]);
	
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
			<Link href="/categories/catalog">
				<a className={styles.SpecialOffers__link}>
					{languageFile?.['card-slider']?.['link']}
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
