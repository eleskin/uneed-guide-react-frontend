import styles from '/styles/Contacts.module.scss';
import Link from 'next/link';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';

const Contacts = () => {
	return (
		<div className={styles.Contacts}>
			<Container isMainPage={true}>
				<h1 className={styles.Contacts__title}>Контакты</h1>
				<div className={styles.Contacts__links}>
					<div className={styles.Contacts__banner}>
						<h3>Возникли трудности?</h3>
						<p>Если у Вас возникли вопросы или трудности при оформлении заказа напишите нам</p>
						<div>
							<Button.Outlined>Задать вопрос</Button.Outlined>
							<Link href="#"><a>Раздел вопросов</a></Link>
						</div>
					</div>
					<div className={styles.Contacts__partners}>
						<h3>Партнерам</h3>
						<p>Узнайте подробные условия для сотрудничества с нашим сервисом</p>
						<div>
							<Link href="#"><Button.Outlined>Подробнее</Button.Outlined></Link>
						</div>
					</div>
				</div>
				<div className={styles.Contacts__contact}>
					<div className={styles.Contacts__address}>
						<h3>Юридический адрес</h3>
						<p>143151, Московская область, г. Санкт-Петербург, ул. красногвардейцев, д.63, стр.1</p>
						<h3>Телефон по всей России</h3>
						<Link href="#"><a type="tel:88000000000">8 (800) 000-00-00</a></Link>
						<h3>Дополнительный телефон</h3>
						<Link href="#"><a type="tel:84950000000">8 (495) 000-00-00</a></Link>
						<h3>Для партнеров</h3>
						<Link href="#"><a type="mailto:partner@uneed-guide.com">partner@uneed-guide.com</a></Link>
						<h3>Помощь клиентам</h3>
						<Link href="#"><a type="mailto:Help@uneed-guide.com">Help@uneed-guide.com</a></Link>
					</div>
					<div className={styles.Contacts__map}>
						<script type="text/javascript" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab84802a486f2b56cef464f7a9f9ef863ac5d0c6271958fb33847c85e00d2f30f&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Contacts;
