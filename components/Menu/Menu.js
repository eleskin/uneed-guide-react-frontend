import Button from '../Button/Button';
import styles from './Menu.module.scss';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<header className={styles.Menu__header}>
				<Button.Secondary>Авторизация</Button.Secondary>
				<Button.Primary>Регистрация</Button.Primary>
			</header>
		</div>
	);
};

export default Menu;
