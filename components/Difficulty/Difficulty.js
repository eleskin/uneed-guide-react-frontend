import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Difficulty.module.scss';

const Difficulty = () => {
	return (
		<div className={styles.Difficulty}>
			<h3>Не нашли то что искали?</h3>
			<p>Если у Вас возникли вопросы или трудности с поиском информации или экскурсии, задайте нам вопрос</p>
			<div>
				<Button.Outlined>Задать вопрос</Button.Outlined>
				<Link href="#"><a>Раздел вопросов</a></Link>
			</div>
		</div>
	);
};

export default Difficulty;
