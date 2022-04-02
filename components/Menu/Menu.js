import Button from '../Button/Button';
import styles from './Menu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<header className={styles.Menu__header}>
				<Button.Secondary>Авторизация</Button.Secondary>
				<Button.Primary>Регистрация</Button.Primary>
			</header>
			<div className={styles.Menu__search}>
				<label>
					<input type="text" placeholder="Например, экскурсии по Москва-реке"/>
					<Image src="/assets/images/header/header-magnifier.svg" width={16} height={16}/>
				</label>
				<span>
					Последние запросы: <b>водные экскурсии, экскурсия в музее</b>
				</span>
			</div>
			<nav className={styles.Menu__nav}>
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
		</div>
	);
};

export default Menu;
