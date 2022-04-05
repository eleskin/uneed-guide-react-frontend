import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<div className={styles.Navigation__mobile}>
				<div className={styles.Navigation__row}>
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
				</div>
				<div className={styles.Navigation__row}>
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
				</div>
			</div>
			<div className={styles.Navigation__desktop}>
				<div className={styles.Navigation__top}>
					<div className={styles.Navigation__column}>
						<h6>На транспорте</h6>
						<ul>
							<li>
								<Link href="#"><a>Ночные экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Экскурсии на автобусе</a></Link>
							</li>
							<li>
								<Link href="#"><a>Обзорные экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Авторские прогулки</a></Link>
							</li>
							<li>
								<Link href="#"><a>Автобусные экскурсии</a></Link>
							</li>
						</ul>
					</div>
					<div className={styles.Navigation__column}>
						<h6>Пешеходные</h6>
						<ul>
							<li>
								<Link href="#"><a>Ночные экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Музеи</a></Link>
							</li>
							<li>
								<Link href="#"><a>Прогулки по Москва-реке</a></Link>
							</li>
							<li>
								<Link href="#"><a>По бункерам</a></Link>
							</li>
							<li>
								<Link href="#"><a>Усадьбы и парки</a></Link>
							</li>
						</ul>
					</div>
					<div className={styles.Navigation__column}>
						<h6>Прочее</h6>
						<ul>
							<li>
								<Link href="#"><a>Мистические экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Пешеходные экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Экскурсии на автобусе</a></Link>
							</li>
							<li>
								<Link href="#"><a>Обзорные экскурсии</a></Link>
							</li>
							<li>
								<Link href="#"><a>Авторские прогулки</a></Link>
							</li>
							<li>
								<Link href="#"><a>Музеи</a></Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
