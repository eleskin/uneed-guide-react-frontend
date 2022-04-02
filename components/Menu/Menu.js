import Button from '../Button/Button';
import styles from './Menu.module.scss';
import Image from 'next/image';

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
		</div>
	);
};

export default Menu;
