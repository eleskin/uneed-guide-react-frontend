import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getPreferential} from '../../store/slices/mainPage';
import CardSlider from '../CardSlider/CardSlider';
import Container from '../Container/Container';
import ExcursionsCard from '../ExcursionsCard/ExcursionsCard';
import Title from '../Title/Title';
import styles from './LimitedOpportunities.module.scss';

const LimitedOpportunities = ({value}) => {
	const dispatch = useDispatch();
	const [activeSlide, setActiveSlide] = useState(0);
	const [isDisabledNextButton, setIsDisabledNextButton] = useState(false);
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		dispatch(getPreferential({
			limit: 6,
			offset: 0,
//			city: 0,
			locale: router.locale,
			forPreferential: 1,
			timeStart: value.toISOString()
		}));
	}, [dispatch]);
	
	const slides = [
		{},
		{},
		{},
		{},
		{},
		{},
	];
	
	const nextSlide = () => {
		activeSlide < slides.length - 1 && setActiveSlide(activeSlide + 1);
		
		activeSlide + 1 >= slides.length - 1 && setIsDisabledNextButton(true);
	};
	
	const prevSlide = () => {
		activeSlide > 0 && setActiveSlide(activeSlide - 1);
		
		activeSlide < slides.length && setIsDisabledNextButton(false);
	};
	
	const slidesList = slides.map((slide, index) => (
		<ExcursionsCard
			limitedOpportunities={true}
			link="#"
			key={index}
		/>
	));
	
	return (
		<div className={styles.LimitedOpportunities}>
			<Container isMainPage={true}>
				<div className={styles.LimitedOpportunities__title}>
					<div>
						<Title style={{marginBottom: 0}}>{languageFile?.['limited-opportunities']?.['title']}</Title>
						<span>{languageFile?.['limited-opportunities']?.['subtitle']}</span>
					</div>
					<div className={styles.LimitedOpportunities__buttons}>
						<button
							onClick={prevSlide}
							disabled={activeSlide <= 0}
						>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M0 6L6.48649 12L8 10.6L3.02703 6L8 1.4L6.48649 0L0 6Z" fill="#F0515D"/>
							</svg>
						</button>
						<button
							onClick={nextSlide}
							disabled={isDisabledNextButton}
						>
							<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M8 6L1.51351 12L4.76837e-07 10.6L4.97297 6L4.76837e-07 1.4L1.51351 0L8 6Z" fill="#F0515D"/>
							</svg>
						</button>
					</div>
				</div>
			</Container>
			<div className={styles.LimitedOpportunities__container}>
				<CardSlider
					nextSlide={nextSlide}
					prevSlide={prevSlide}
					activeSlide={activeSlide}
					setActiveSlide={setActiveSlide}
					isDisabledNextButton={isDisabledNextButton}
					isLimitedOpportunities={true}
				>{slidesList}</CardSlider>
			</div>
			<Container isMainPage={true}>
				<footer className={styles.LimitedOpportunities__footer}>
					<Link href="#">
						<a>
							{languageFile?.['limited-opportunities']?.['link']}
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

export default LimitedOpportunities;
