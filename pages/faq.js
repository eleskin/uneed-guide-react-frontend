import styles from '/styles/FAQ.module.scss';
import {useState} from 'react';
import Container from '../components/Container/Container';
import QuestionsMenu from '../components/QuestionsMenu/QuestionsMenu';

const FAQ = () => {
	const [visibleQuestions, setVisibleQuestions] = useState(5);
	const [isVisibleButton, setIsVisibleButton] = useState(true);
	const [questions] = useState([
		{
			title: 'Как происходит оплата?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Что гарантирует честность и безопасность онлайн оплаты?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Нужно ли покупать тур заранее?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Как я могу получить свой билет/данные о купленном туре/чек?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Есть ли какие то льготы и скидки?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Как происходит оплата?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Что гарантирует честность и безопасность онлайн оплаты?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Нужно ли покупать тур заранее?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Как я могу получить свой билет/данные о купленном туре/чек?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
		{
			title: 'Есть ли какие то льготы и скидки?',
			text: <>
				<p>Оплата происходит после выбора тура и оформления заказа.</p>
				<p>Тур может иметь три типа оплаты:</p>
				<ol>
					<li>Полная оплата в размере 100%</li>
					<li>Предоплата (Процент или сумма) - зависит от провайдера</li>
					<li>Бесплатно - вы ничего не платите за тур</li>
				</ol>
				<p>Оплата происходит через платежную систему YooKassa. В некоторых случаях способ оплаты может быть иным, все зависит от провайдера</p>
			</>,
		},
	]);
	
	const questionsList = questions.map((question, index) => (
		<details key={index}>
			<summary>{question.title}</summary>
			{question.text}
		</details>
	));
	
	return (
		<div className={styles.FAQ}>
			<Container>
				<div className={styles.FAQ__sidebar}>
					<h1 className={styles.FAQ__title}>Частозадаваемые вопросы</h1>
					<QuestionsMenu
						title="Работа с сайтом"
						links={[
							{text: 'Регистрация', href: '#'},
							{text: 'Оформление заказа', href: '#'},
							{text: 'Личный кабинет', href: '#'},
							{text: 'Выбор товара', href: '#'},
							{text: 'Раздел истории заказов', href: '#'},
							{text: 'Избранное', href: '#'},
						]}
					/>
					<QuestionsMenu
						title="Работа с заказом"
						links={[
							{text: 'Скидки и промокоды', href: '#'},
							{text: 'Условия оплаты', href: '#'},
							{text: 'Отказ от заказа', href: '#'},
							{text: 'Получение билета', href: '#'},
						]}
					/>
					<QuestionsMenu
						title="Оплата и возврат"
						links={[
							{text: 'Способы оплаты', href: '#'},
							{text: 'Возврат денег', href: '#'},
							{text: 'Отказ от заказа', href: '#'},
							{text: 'Получение билета', href: '#'},
						]}
					/>
				</div>
				<div className={styles.FAQ__main}>
					{questionsList.slice(0, visibleQuestions)}
					{isVisibleButton && (
						<button onClick={() => {
							setVisibleQuestions(questions.length);
							setIsVisibleButton(false);
						}}>Загрузить еще</button>
					)}
				</div>
			</Container>
		</div>
	);
};

export default FAQ;
