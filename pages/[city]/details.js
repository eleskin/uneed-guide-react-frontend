import styles from '/styles/Details.module.scss';
import {useSelector} from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';
import Container from '../../components/Container/Container';
import ExcursionCard from '../../components/ExcursionCard/ExcursionCard';
import Help from '../../components/Help/Help';

const Details = () => {
	const slides = useSelector((state) => state['mainPageSlice']['upcoming']);
	
	const cardsList = slides.map((slide, index) => {
		return (
			<ExcursionCard
				slide={slide}
				//				dateValue={dateValue}
				//				setDateValue={setDateValue}
				//				handleCalendarButtonClick={handleCalendarButtonClick}
				//				isVisibleCalendar={isVisibleCalendar}
				//				setIsVisibleCalendar={setIsVisibleCalendar}
				key={index}
			/>
		);
	});
	
	return (
		<div className={styles.Details}>
			<Container isMainPage={true}>
				<div className={styles.Details__container}>
					<div>
						<CardContainer padding={16}>
							<div className={styles.Details__info}>
								<h2>Билет приобретен</h2>
								<span className={styles.Details__text}>Спасибо за покупку!<br/>Приятной и комфортной вам экскурсии</span>
								<div>
									<div>
										<h3>Место отправления</h3>
										<span className={styles.Details__text}>
											Москва, Лиговский проезд, д.3, причал №3
										</span>
									</div>
									<div>
										<h3>Дата экскурсии</h3>
										<span className={styles.Details__text}>
											Ожидаемая дата экскурсии: 03 апреля 2022 г.
										</span>
									</div>
									<div>
										<h3>Время отправления</h3>
										<span className={styles.Details__text}>
											12:45
										</span>
									</div>
									<div>
										<h3>Время прибытия</h3>
										<span className={styles.Details__text}>
											14:45
										</span>
									</div>
									<div>
										<h3>Время обратного отправления</h3>
										<span className={styles.Details__text}>
											17:45
										</span>
									</div>
									<div>
										<h3>Время обратного прибытия</h3>
										<span className={styles.Details__text}>
											19:45
										</span>
									</div>
								</div>
								<footer>
									<h3>Ваш номер бронирования</h3>
									<span className={styles.Details__text}>№342525634-445-6642</span>
								</footer>
							</div>
						</CardContainer>
						<CardContainer padding={16}>
							<div className={styles.Details__state}>
								<h2>Билет приобретен</h2>
								<header>
									<span className={styles.Details__text}>Экскурсия по Москва-реке</span>
									<h3>Групповая экскурсия</h3>
								</header>
								<div className={styles.Details__tickets}>
									<div className={styles.Details__ticket}>
										<span className={styles.Details__text}>Взрослый билет</span>
										<div className={styles.Details__total}>
											<div className={styles.Details__amount}>
												<div>
													<h3>Цена 1 билета</h3>
													<span>700 ₽</span>
												</div>
												<div>
													<h3>Кол-во билетов:</h3>
													<span>2</span>
												</div>
											</div>
											<div className={styles.Details__sum}>
												<strong>1 400 ₽</strong>
												<span>1 600 ₽</span>
											</div>
										</div>
									</div>
									<div className={styles.Details__ticket}>
										<span className={styles.Details__text}>Детский билет</span>
										<div className={styles.Details__total}>
											<div className={styles.Details__amount}>
												<div>
													<h3>Цена 1 билета</h3>
													<span>700 ₽</span>
												</div>
												<div>
													<h3>Кол-во билетов:</h3>
													<span>1</span>
												</div>
											</div>
											<div className={styles.Details__sum}>
												<strong>700 ₽</strong>
												<span>800 ₽</span>
											</div>
										</div>
									</div>
									<div className={styles.Details__ticket}>
										<span className={styles.Details__text}>Льготный билет</span>
										<div className={styles.Details__total}>
											<div className={styles.Details__amount}>
												<div>
													<h3>Цена 1 билета</h3>
													<span>250 ₽</span>
												</div>
												<div>
													<h3>Кол-во билетов:</h3>
													<span>1</span>
												</div>
											</div>
											<div className={styles.Details__sum}>
												<strong>250 ₽</strong>
												<span>350 ₽</span>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.Details__result}>
									<span className={styles.Details__text}>Итоговая стоимость</span>
									<div>
										<strong>2 350 ₽</strong>
										<span>2 950 ₽</span>
									</div>
								</div>
								<footer>
									<div>
										<h3>Способ оплаты</h3>
										<span className={styles.Details__text}>Банковской картой</span>
									</div>
									<div>
										<h3>Состояние оплаты</h3>
										<span className={`${styles.Details__text} ${styles.Details__text_successful}`}>Оплачено</span>
									</div>
								</footer>
							</div>
						</CardContainer>
					</div>
					<div>
						<CardContainer padding={16}>
							<div className={styles.Details__help}>
								<h2>Помощь</h2>
								<Help
									links={[
										{text: 'Частозадаваемые вопросы', href: '#'},
										{text: 'Задать вопрос по экскурсии', href: '#'},
										{text: 'Контакты', href: '#'},
									]}
								/>
							</div>
						</CardContainer>
					</div>
				</div>
				<div className={styles.Details__similar}>
					<h2>С этой экскурсия часто покупают</h2>
					<div>
						{cardsList}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Details;
