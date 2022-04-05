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
		</div>
	);
};

export default Menu;
