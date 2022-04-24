import Image from 'next/image';
import {useState} from 'react';
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
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
	];
	
	const imagesList = slides.map((image, index) => (
		<span
			className={`${styles.ProductSlider__image} ${activeSlide === index ? styles.ProductSlider__image_active : ''}`}
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
		if ((index === 3)  && slides.length > 4) {
			return (
				<>
					<button
						onClick={() => {
							setIsVisibleHiddenSlides(true);
							setActiveSlide(3);
						}}
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
				</>
			);
		} else {
			return (
				<button
					className={`
					${styles.ProductSlider__button}
					${(index < 4 ? isVisibleHiddenSlides : !isVisibleHiddenSlides) ? styles.ProductSlider__button_hidden : ''}
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
			);
		}
	});
	
	return (
		<div className={styles.ProductSlider}>
			<div className={styles.ProductSlider__images}>
				{imagesList}
			</div>
			<div className={styles.ProductSlider__control}>
				<header>
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
				<footer>
					{slidesList}
				</footer>
			</div>
		</div>
	);
};

export default ProductSlider;
