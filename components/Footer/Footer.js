import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Footer__about}>
			<div className={styles.Footer__container}>
					<Image src="/assets/images/footer/footer-logo.svg" width={230} height={45} alt=""/>
					<p>Uneed guide - онлайн-сервис по поиску билетов на самые популярные водные прогулки и экскурсии в
					   Санкт-Петербурге, Москве и Мурманске. Интересные маршруты, реки и каналы, Нева и разводные мосты на нашем
					   сайте uneed.guide.ru</p>
				</div>
			</div>
			<div className={styles.Footer__navigation}>
			<div className={styles.Footer__container}>
					<Navigation/>
					<div className={styles.Footer__button}>
						<Button.Primary>Задать вопрос</Button.Primary>
					</div>
				</div>
			</div>
			<div className={styles.Footer__info}>
			<div className={styles.Footer__container}>
					<Link href="#">
						<a className={styles.Footer__link}>Пользовательское соглашение</a>
					</Link>
					<div>
						<Image src="/assets/images/footer/footer-payments.png" width={91} height={18} alt=""/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
