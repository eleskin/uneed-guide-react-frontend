import Image from 'next/image';
import {Fragment, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useSwipeable} from 'react-swipeable';
import Container from '../Container/Container';
import styles from './ProductSlider.module.scss';

const ProductSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isVisibleHiddenSlides, setIsVisibleHiddenSlides] = useState(false);
	
	const slides = [
		{},
		{},
		{},
		{},
		{},
	];
	
	const imagesList = slides.map((image, index) => (
		<span
			className={`${styles.ProductSlider__image} ${activeSlide === index ? styles.ProductSlider__image_active : ''}`}
			style={{
				transform: `translateX(calc(-${100 * activeSlide}% - ${16 * activeSlide}px))`
			}}
			key={index}
		>
			<Image
				src={`/assets/images/categories/categories-image-${index + 1}.png`}
				width={390}
				height={280}
				layout="responsive"
				objectFit="cover"
				alt=""
			/>
		</span>
	));
	
	const slidesList = slides.map((slide, index) => {
		if (index === 3 && slides.length > 4) {
			return (
				<Fragment key={index}>
					<button
						onClick={() => setIsVisibleHiddenSlides(true)}
						className={`
							${styles.ProductSlider__more}
							${isVisibleHiddenSlides ? styles.ProductSlider__button_hidden : ''}
						`}
					>
						<Image
							src={`/assets/images/categories/categories-image-${index + 1}.png`}
							width={75}
							height={50}
							layout="responsive"
							alt=""
						/>
						<i>+{slides.length - index}</i>
					</button>
					<button
						className={`
							${styles.ProductSlider__button}
							${!isVisibleHiddenSlides ? styles.ProductSlider__button_hidden : ''}
							${activeSlide === index ? styles.ProductSlider__button_active : ''}
						`}
						onClick={() => setActiveSlide(index)}
					>
						<Image
							src={`/assets/images/categories/categories-image-${index + 1}.png`}
							width={75}
							height={50}
							layout="responsive"
							alt=""
						/>
					</button>
				</Fragment>
			);
		} else {
			return (
				<button
					className={`
					${styles.ProductSlider__button}
					${(index > 3 && !isVisibleHiddenSlides) ? styles.ProductSlider__button_hidden : ''}
					${activeSlide === index ? styles.ProductSlider__button_active : ''}
				`}
					onClick={() => setActiveSlide(index)}
					key={index}
				>
					<Image
						src={`/assets/images/categories/categories-image-${index + 1}.png`}
						width={75}
						height={50}
						layout="responsive"
						alt=""
					/>
				</button>
			);
		}
	});
	
	let isDisabledButton = activeSlide >= slides.length - 2;
	
	const threePhotos = useMediaQuery({query: '(min-width: 1600px)'});
	const fourPhotos = useMediaQuery({query: '(min-width: 2540px)'});
	
	if (fourPhotos) {
		isDisabledButton = activeSlide >= slides.length - 4;
	}
	
	if (threePhotos) {
		isDisabledButton = activeSlide >= slides.length - 3;
	}
	
	const nextSlide = () => {
		if (!isDisabledButton) {
			setActiveSlide(activeSlide + 1);
			
			isDisabledButton && setIsVisibleHiddenSlides(true);
		}
	};
	
	const prevSlide = () => {
		activeSlide > 0 && setActiveSlide(activeSlide - 1);
	};
	
	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	});
	
	return (
		<div className={styles.ProductSlider}>
			<Container>
				<div className={styles.ProductSlider__control}>
					<span>{slides.length} фотографий</span>
					<button
						onClick={() => {setActiveSlide(activeSlide - 1)}}
						disabled={activeSlide <= 0}
					>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0 6L6.48649 12L8 10.6L3.02703 6L8 1.4L6.48649 0L0 6Z" fill="white"/>
						</svg>
					</button>
					<button
						onClick={() => {setActiveSlide(activeSlide + 1)}}
						disabled={isDisabledButton}
					>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M8 6L1.51351 12L2.54528e-07 10.6L4.97297 6L2.54528e-07 1.4L1.51351 0L8 6Z" fill="white"/>
						</svg>
					</button>
				</div>
			</Container>
			<div className={styles.ProductSlider__images} {...handlers}>
				{imagesList}
			</div>
			<header className={styles.ProductSlider__header}>
				<button>
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 15L2 8L9 1" stroke="#F0515D" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				</button>
				<button>
					<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.6891 2.32611C16.2738 1.90569 15.7806 1.57219 15.2377 1.34465C14.6949 1.11711 14.1131 1 13.5255 1C12.9379 1 12.3561 1.11711 11.8133 1.34465C11.2704 1.57219 10.7772 1.90569 10.3619 2.32611L9.49978 3.19821L8.63771 2.32611C7.79866 1.4773 6.66066 1.00044 5.47407 1.00044C4.28747 1.00044 3.14947 1.4773 2.31042 2.32611C1.47137 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47137 7.87819 2.31042 8.727L3.1725 9.5991L9.49978 16L15.8271 9.5991L16.6891 8.727C17.1047 8.30679 17.4344 7.80785 17.6593 7.25871C17.8842 6.70957 18 6.12097 18 5.52656C18 4.93214 17.8842 4.34355 17.6593 3.7944C17.4344 3.24526 17.1047 2.74633 16.6891 2.32611V2.32611Z" stroke="#F0515D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</header>
			<footer
				className={`
						${styles.ProductSlider__footer}
						${isVisibleHiddenSlides ? styles.ProductSlider__footer_flex : ''}
					`}
			>
				{slidesList}
			</footer>
			{/* </div> */}
		</div>
	);
};

export default ProductSlider;
