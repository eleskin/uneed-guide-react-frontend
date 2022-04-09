import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Menu.module.scss';

const Menu = ({isActiveMenu, ...props}) => {
	return (
		<div {...props} className={`${styles.Menu} ${isActiveMenu ? styles.Menu_active : ''}`}>
			<header className={styles.Menu__header}>
				<Button.Secondary>Авторизация</Button.Secondary>
				<Button.Primary>Регистрация</Button.Primary>
			</header>
			<div className={styles.Menu__search}>
				<label>
					<input type="text" placeholder="Например, экскурсии по Москва-реке"/>
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.8989 10.3301L15.1513 15.1041C15.2248 15.1866 15.2151 15.3102 15.1296 15.3801L14.4237 15.9582C14.3383 16.0282 14.2094 16.0181 14.136 15.9356L9.88356 11.1616L10.8989 10.3301Z" fill="#B9BFC5"/>
						<path d="M12.469 6.21694C12.469 9.35466 9.80973 11.9339 6.48451 11.9339C3.15929 11.9339 0.5 9.35466 0.5 6.21694C0.5 3.07921 3.15929 0.5 6.48451 0.5C9.80973 0.5 12.469 3.07921 12.469 6.21694Z" stroke="#B9BFC5"/>
					</svg>
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
