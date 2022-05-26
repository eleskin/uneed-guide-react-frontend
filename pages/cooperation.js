import styles from '/styles/Cooperation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button/Button';
import CardContainer from '../components/CardContainer/CardContainer';
import Container from '../components/Container/Container';

const Cooperation = () => {
	return (
		<div className={styles.Cooperation}>
			<Container isMainPage={true}>
				<h1 className={styles.Cooperation__title}>Сотрудничество</h1>
				<span className={styles.Cooperation__subtitle}>Приглашаем к сотрудничеству теплоходные компании, туристические фирмы и гидов в летнем сезоне 2022 года!</span>
				<Link href="#">
					<Button.Primary small={true} style={{fontWeight: 600, padding: '0.75rem 2.5rem'}}>Оставить
					                                                                                  заявку</Button.Primary>
				</Link>
				<div className={styles.Cooperation__about}>
					<CardContainer>
						<h3>UNEED GUIDE</h3>
						<span> - ЭТО ОНЛАЙН СЕРВИС ПО ПРОДАЖЕ ИНДИВИДУАЛЬНЫХ ИЛИ ГРУППОВЫХ АВТОРСКИХ ТУРОВ, ЭКСКУРСИЙ, МАРШРУТОВ.</span>
					</CardContainer>
					<p>Основной принцип сервиса - возможность любому выбрать и купить интересный туристический продукт на нужную
					   дату, время и бюджет.</p>
				</div>
				<div className={styles.Cooperation__goal}>
					<CardContainer>
						<h3>Цель проекта</h3>
						<strong>- СДЕЛАТЬ ЛОКАЛЬНЫЙ ТУРИЗМ УДОБНЫМ, ДОСТУПНЫМ, ЗАЩИЩЕННЫМ И ПРИВЛЕКАТЕЛЬНЫМ.</strong>
						<p>Мы хотим объединить на одном ресурсе туристов и агентов/операторов, чтобы пользователи и партнеры могли
						   быстро, удобно и прозрачно взаимодействовать друг с другом.</p>
						<div>
							<Image
								src="/assets/images/cooperation/cooperation-image-1.png"
								layout="fill"
								alt=""
							/>
						</div>
					</CardContainer>
				</div>
			</Container>
		</div>
	);
};

export default Cooperation;
