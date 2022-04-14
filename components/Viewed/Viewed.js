import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import Container from '../Container/Container';
import ExcursionCard from '../ExcursionCard/ExcursionCard';
import Title from '../Title/Title';
import styles from './Viewed.module.scss';

const Viewed = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [widthSlide, setWidthSlide] = useState(0);
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	const nextSlide = () => {
		activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1);
	};
	
	const prevSlide = () => {
		activeSlide > 0 && setActiveSlide(activeSlide - 1);
	};
	
	const handlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	});
	
	const slides = [
		{},
		{},
		{},
		{},
	];
	
	const slidesList = slides.map((slide, index) => (
		<ExcursionCard
			viewed={true}
			key={index}
		/>
	));
	
	const viewedContainerRef = createRef();
	
	useEffect(() => {
		setWidthSlide(parseFloat(window.getComputedStyle(viewedContainerRef.current.children[0]).width));
	}, [viewedContainerRef]);
	
	return (
		<div className={styles.Viewed}>
			<Container>
				<Title>{languageFile?.['viewed']?.['title']}</Title>
			</Container>
			<div className={styles.Viewed__slider} {...handlers}>
				<div
					className={styles.Viewed__container}
					style={{transform: `translateX(${-widthSlide * activeSlide - 16 * activeSlide}px`}}
					ref={viewedContainerRef}
				>
					{slidesList}
				</div>
			</div>
		</div>
	);
};

export default Viewed;
