import Link from 'next/link';
import Button from '../components/Button/Button';
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
				<div className={styles.NotFound__banner}>
					<h3>Не нашли то что искали?</h3>
					<p>Если у Вас возникли вопросы или трудности с поиском<br/>информации или экскурсии, задайте нам вопрос</p>
					<div>
						<Button.Outlined>Задать вопрос</Button.Outlined>
						<Link href="#"><a>Раздел вопросов</a></Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NotFound;
