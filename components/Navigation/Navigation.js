import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<h6>Навигация</h6>
			<ul>
				<li>
					<Link href="#"><a>Каталог экскурсий</a></Link>
				</li>
				<li>
					<Link href="#"><a>Условия оплаты и возврата</a></Link>
				</li>
				<li>
					<Link href="#"><a>Частозадаваемые вопросы</a></Link>
				</li>
				<li>
					<Link href="#"><a>Блог</a></Link>
				</li>
				<li>
					<Link href="#"><a>Контакты</a></Link>
				</li>
			</ul>
			<h6>Каталог экскурсий</h6>
			<ul>
				<li>
					<Link href="#"><a>Дневные экскурсии</a></Link>
				</li>
				<li>
					<Link href="#"><a>Метеоры</a></Link>
				</li>
				<li>
					<Link href="#"><a>Ночные экскурсии</a></Link>
				</li>
				<li>
					<Link href="#"><a>Крепость Орешек</a></Link>
				</li>
				<li>
					<Link href="#"><a>Праздники</a></Link>
				</li>
				<li>
					<Link href="#"><a>Петергоф</a></Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
