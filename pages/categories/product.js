import {useState} from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import styles from '../../styles/Product.module.scss';
import Viewed from '../../components/Viewed/Viewed';

const Product = () => {
	const [isExpandedText, setIsExpandedText] = useState(false);
	
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
								<p className={styles.Product__paragraph}>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.</p>
								<p className={`${styles.Product__paragraph} ${isExpandedText ? styles.Product__paragraph_active : ''}`}>
									Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты.
								</p>
							</div>
							<button className={styles.Product__button_expand} onClick={() => setIsExpandedText(!isExpandedText)}>
								{!isExpandedText ? 'Читать полностью' : 'Свернуть'}
							</button>
						</CardContainer>
						<CardContainer>
							<div className={styles.Product__survey}>
								<h4>Место встречи</h4>
								<span>Пресненская набережная, 2, причал №2</span>
								<h4>Продолжительность</h4>
								<span>1 час 30 минут</span>
								<h4>Возраст</h4>
								<span>8+</span>
								<h4>Туроператор</h4>
								<span>Нева Тревел</span>
								<h4>Возрастная категория</h4>
								<span>От 3х лет</span>
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
