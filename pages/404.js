import Link from 'next/link';
import Difficulty from '../components/Difficulty/Difficulty';
import styles from '../styles/NotFound.module.scss';
import Container from '../components/Container/Container';

const NotFound = () => {
	return (
		<div className={styles.NotFound}>
			<Container isMainPage={true}>
				<span className={styles.NotFound__code}>404</span>
				<h1 className={styles.NotFound__title}>Страница не найдена</h1>
				<span className={styles.NotFound__subtitle}>Но есть много других полезных страниц</span>
				<ul className={styles.NotFound__navigation}>
					<li><Link href="/"><a>Главная</a></Link></li>
					<li><Link href="/"><a>Каталог экскурсий</a></Link></li>
					<li><Link href="/"><a>Условия оплаты и возврата</a></Link></li>
					<li><Link href="/"><a>Контакты</a></Link></li>
				</ul>
				<Difficulty/>
			</Container>
		</div>
	);
};

export default NotFound;
