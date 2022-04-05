import Link from 'next/link';
import {createRef} from 'react';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Menu.module.scss';
import Image from 'next/image';

const Menu = ({isActiveMenu, setIsActiveMenu, ...props}) => {
	const menuRef = createRef();
	
	useOutsideClickHandler(menuRef, isActiveMenu, setIsActiveMenu);
	
	return (
		<div {...props} className={`${styles.Menu} ${isActiveMenu ? styles.Menu_active : ''}`} ref={menuRef}>
			<header className={styles.Menu__header}>
				<Button.Secondary>Авторизация</Button.Secondary>
				<Button.Primary>Регистрация</Button.Primary>
			</header>
			<div className={styles.Menu__search}>
				<label>
					<input type="text" placeholder="Например, экскурсии по Москва-реке"/>
					<Image
						src="/assets/images/menu/menu-magnifier.svg"
						width={16}
						height={16}
						alt=""
					/>
				</label>
				<span>
					Последние запросы: <b>водные экскурсии, экскурсия в музее</b>
				</span>
			</div>
			<Navigation/>
			<footer className={styles.Menu__footer}>
				<div className={styles.Menu__title}>
					<h4>Часто посещают в Москве</h4>
					<Link href="#"><a>Изменить город</a></Link>
				</div>
				<ul className={styles.Menu__places}>
					<li>
						<Link href="#">
							<a>
								<i>5.0 <Image src="/assets/images/navigation/navigation-heart.svg" width={11} height={9} alt=""/></i>
								<span>Обзорная прогулка по Москве с личным гидом</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<i>4.9 <Image src="/assets/images/navigation/navigation-heart.svg" width={11} height={9} alt=""/></i>
								<span>Кронштадт — Никольский (Морской) собор и Петровский док</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<i>4.9 <Image src="/assets/images/navigation/navigation-heart.svg" width={11} height={9} alt=""/></i>
								<span>Билеты в Кремль и Оружейную палату</span>
							</a>
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Menu;
