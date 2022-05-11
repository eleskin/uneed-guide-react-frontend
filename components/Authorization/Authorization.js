import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {setIsActiveAuthorizationModal} from '../../store/slices';
import Form from '../../ui/Form/Form';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import Container from '../Container/Container';
import styles from './Authorization.module.scss';

const Authorization = ({headerHeight}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isActiveAuthorizationModal = useSelector((state) => state['indexSlice']['isActiveAuthorizationModal']);
	const [selectedWay, setSelectedWay] = useState(0);
	const [currentPhoneStep, setCurrentPhoneStep] = useState(0);
	const [currentEmailStep, setCurrentEmailStep] = useState(0);
	const [codeTimeValue, setCodeTimeValue] = useState(10);
	const [confirmationCode] = useState('1111');
	
	const [phoneNumberValue, setPhoneNumberValue] = useState('');
	const [confirmationCodeValue, setConfirmationCodeValue] = useState('');
	
	const [phoneNumberErrorValue, setPhoneNumberErrorValue] = useState('');
	const [confirmationCodeErrorValue, setConfirmationCodeErrorValue] = useState('');
	
	const [emailValue, setEmailValue] = useState('');
	
	const [emailErrorValue, setEmailErrorValue] = useState('');
	
	const isDesktop = useMediaQuery({query: '(min-width: 768px)'});
	
	const handleClickBack = () => {
		if (!isDesktop) {
			const isExistPreviousPage = !localStorage.getItem('previous_page') || localStorage.getItem('previous_page') === '/profile';
			router.push(isExistPreviousPage ? '/' : localStorage.getItem('previous_page'));
		}
		dispatch(setIsActiveAuthorizationModal(false));
	};
	
	useEffect(() => {
		if (currentPhoneStep === 1) {
			const interval = setInterval(() => {
				setCodeTimeValue((prevState) => prevState - 1);
			}, 1000);
			
			return () => clearTimeout(interval);
		}
	}, [currentPhoneStep, setCurrentPhoneStep]);
	
	return (
		<div
			className={`${styles.Authorization} ${isActiveAuthorizationModal ? styles.Authorization_active : ''}`}
			style={{paddingTop: `${headerHeight}px`}}
		>
			<Container isMainPage={true}>
				<div className={styles.Authorization__wrapper}>
					<header className={styles.Authorization__header}>
						<svg width="220" height="43" viewBox="0 0 220 43" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30.2573 33.5843C26.8191 36.9141 22.693 38.5788 17.8794 38.5788C12.951 38.5788 8.73913 36.8278 5.24333 33.3261C1.7479 29.824 0 25.6045 0 20.6673V2.75568C0 1.99788 0.269501 1.34918 0.808135 0.809582C1.34677 0.269978 1.9943 -7.62939e-06 2.75073 -7.62939e-06C3.50717 -7.62939e-06 4.1547 0.269978 4.69333 0.809582C5.23197 1.34918 5.50147 1.99788 5.50147 2.75568V20.6673C5.50147 24.0889 6.71036 27.011 9.1289 29.4335C11.5471 31.8564 14.4639 33.0675 17.8794 33.0675C21.2949 33.0675 24.2117 31.8564 26.6299 29.4335C29.0484 27.011 30.2573 24.0889 30.2573 20.6673" fill="#F0515D"/>
							<path d="M6.12256 9.41571C9.56079 6.0859 13.6869 4.42117 18.5005 4.42117C23.4289 4.42117 27.6408 6.17221 31.1366 9.67393C34.632 13.176 36.3799 17.3955 36.3799 22.3327V40.2443C36.3799 41.0021 36.1104 41.6508 35.5718 42.1904C35.0331 42.73 34.3856 43 33.6292 43C32.8727 43 32.2252 42.73 31.6866 42.1904C31.1479 41.6508 30.8784 41.0021 30.8784 40.2443V22.3327C30.8784 18.9111 29.6695 15.989 27.251 13.5665C24.8328 11.1436 21.916 9.93253 18.5005 9.93253C15.085 9.93253 12.1682 11.1436 9.74999 13.5665C7.33146 15.989 6.12256 18.9111 6.12256 22.3327" fill="#F0515D"/>
							<path d="M62.9382 15.305H59.8113V23.741C59.8113 26.5165 58.3028 27.9454 55.9987 27.9454C53.722 27.9454 52.2132 26.5165 52.2132 23.741V15.305H49.1138V24.2082C49.1138 28.4398 51.8018 30.6658 55.3401 30.6658C57.1232 30.6658 58.8238 29.9238 59.8113 28.6323V30.4458H62.9382V15.305Z" fill="#F0515D"/>
							<path d="M77.7777 30.4459H80.8775V21.5154C80.8775 17.2834 78.2166 15.0578 74.6783 15.0578C72.8681 15.0578 71.1946 15.7998 70.1797 17.0362V15.305H67.0527V30.4459H70.1797V21.9827C70.1797 19.2071 71.6885 17.7782 73.9926 17.7782C76.2693 17.7782 77.7777 19.2071 77.7777 21.9827V30.4459Z" fill="#F0515D"/>
							<path d="M91.2184 17.696C93.5501 17.696 95.3878 19.1796 95.4428 21.5154H87.0766C87.4058 19.1249 89.1064 17.696 91.2184 17.696ZM98.2955 25.9395H94.9214C94.3454 27.1212 93.2758 28.0553 91.3556 28.0553C89.0514 28.0553 87.2687 26.5441 87.0491 24.0434H98.5969C98.6794 23.5214 98.7069 23.0266 98.7069 22.5047C98.7069 18.053 95.6621 15.0578 91.3556 15.0578C86.8844 15.0578 83.8125 18.1081 83.8125 22.8617C83.8125 27.6156 87.0219 30.6935 91.3556 30.6935C95.0585 30.6935 97.4448 28.5773 98.2955 25.9395Z" fill="#F0515D"/>
							<path d="M108.143 17.696C110.474 17.696 112.312 19.1796 112.367 21.5154H104.001C104.33 19.1249 106.03 17.696 108.143 17.696ZM115.219 25.9395H111.846C111.27 27.1212 110.2 28.0553 108.28 28.0553C105.976 28.0553 104.193 26.5441 103.973 24.0434H115.521C115.603 23.5214 115.631 23.0266 115.631 22.5047C115.631 18.053 112.586 15.0578 108.28 15.0578C103.809 15.0578 100.736 18.1081 100.736 22.8617C100.736 27.6156 103.946 30.6935 108.28 30.6935C111.983 30.6935 114.369 28.5773 115.219 25.9395Z" fill="#F0515D"/>
							<path d="M117.66 22.807C117.66 27.4783 120.815 30.6935 124.792 30.6935C127.261 30.6935 129.071 29.5393 130.031 28.1652V30.4459H133.185V10.1118H130.031V17.4209C128.879 15.992 126.794 15.0578 124.819 15.0578C120.815 15.0578 117.66 18.1353 117.66 22.807ZM130.031 22.8617C130.031 26.132 127.809 27.973 125.45 27.973C123.119 27.973 120.869 26.0769 120.869 22.807C120.869 19.537 123.119 17.7783 125.45 17.7783C127.809 17.7783 130.031 19.6193 130.031 22.8617Z" fill="#F0515D"/>
							<path d="M140.537 28.6324C140.537 27.5058 139.659 26.6265 138.561 26.6265C137.437 26.6265 136.559 27.5058 136.559 28.6324C136.559 29.759 137.437 30.6384 138.561 30.6384C139.659 30.6384 140.537 29.759 140.537 28.6324Z" fill="#F0515D"/>
							<path d="M142.868 22.807C142.868 27.4782 146.023 30.6934 150 30.6934C152.469 30.6934 154.279 29.4567 155.239 28.1651V30.6934C155.239 33.7162 153.429 35.1998 151.015 35.1998C148.848 35.1998 147.175 34.1283 146.708 32.562H143.609C143.993 35.9143 146.983 37.9202 151.015 37.9202C155.733 37.9202 158.394 34.8152 158.394 30.6934V15.305H155.239V17.5035C154.306 16.212 152.469 15.0578 150 15.0578C146.023 15.0578 142.868 18.1353 142.868 22.807ZM155.239 22.8617C155.239 26.132 153.017 27.973 150.658 27.973C148.327 27.973 146.078 26.0769 146.078 22.807C146.078 19.537 148.327 17.7783 150.658 17.7783C153.017 17.7783 155.239 19.6193 155.239 22.8617Z" fill="#F0515D"/>
							<path d="M176.195 15.305H173.068V23.741C173.068 26.5165 171.559 27.9454 169.255 27.9454C166.978 27.9454 165.47 26.5165 165.47 23.741V15.305H162.371V24.2082C162.371 28.4398 165.059 30.6658 168.597 30.6658C170.38 30.6658 172.081 29.9238 173.068 28.6323V30.4458H176.195V15.305Z" fill="#F0515D"/>
							<path d="M180.309 30.4459H183.436V15.305H180.309V30.4459ZM181.9 13.2991C182.997 13.2991 183.875 12.4197 183.875 11.2931C183.875 10.1665 182.997 9.28712 181.9 9.28712C180.776 9.28712 179.898 10.1665 179.898 11.2931C179.898 12.4197 180.776 13.2991 181.9 13.2991Z" fill="#F0515D"/>
							<path d="M186.509 22.807C186.509 27.4783 189.663 30.6935 193.64 30.6935C196.109 30.6935 197.919 29.5393 198.879 28.1652V30.4459H202.034V10.1118H198.879V17.4209C197.727 15.992 195.643 15.0578 193.668 15.0578C189.663 15.0578 186.509 18.1353 186.509 22.807ZM198.879 22.8617C198.879 26.132 196.658 27.973 194.299 27.973C191.967 27.973 189.718 26.0769 189.718 22.807C189.718 19.537 191.967 17.7783 194.299 17.7783C196.658 17.7783 198.879 19.6193 198.879 22.8617Z" fill="#F0515D"/>
							<path d="M212.511 17.696C214.843 17.696 216.681 19.1796 216.736 21.5154H208.37C208.699 19.1249 210.399 17.696 212.511 17.696ZM219.588 25.9395H216.215C215.639 27.1212 214.569 28.0553 212.649 28.0553C210.345 28.0553 208.562 26.5441 208.342 24.0434H219.89C219.972 23.5214 220 23.0266 220 22.5047C220 18.053 216.955 15.0578 212.649 15.0578C208.178 15.0578 205.105 18.1081 205.105 22.8617C205.105 27.6156 208.315 30.6935 212.649 30.6935C216.352 30.6935 218.738 28.5773 219.588 25.9395Z" fill="#F0515D"/>
						</svg>
						<button onClick={handleClickBack}>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 7.99994L15 14.9999M8 7.99994L15 0.999939M8 7.99994L1 14.9999M8 7.99994L1 0.999939" stroke="#AAA6A6" strokeWidth="1.5" strokeLinecap="round"/>
							</svg>
						</button>
					</header>
					{selectedWay === 0 && (
						<div className={styles.Authorization__container}>
							{currentPhoneStep === 0 && (
								<CardContainer padding={16}>
									<form
										className={styles.Authorization__card}
										onSubmit={(event) => {
											event.preventDefault();
											
											if (phoneNumberValue.length === 15 || phoneNumberValue.length === 16) {
												setCurrentPhoneStep((prevState) => prevState + 1);
												setCodeTimeValue(45);
											} else {
												setPhoneNumberErrorValue('Введите корректный номер телефона');
											}
										}}
									>
										<h2 className={styles.Authorization__title}>Вход</h2>
										<em className={styles.Authorization__subtitle}>или регистрация</em>
										<Form.Input
											type="tel"
											placeholder="+7 (999) 999-99-99"
											value={phoneNumberValue}
											onInput={(event) => {
												setPhoneNumberValue(event.target.value);
												phoneNumberErrorValue && setPhoneNumberErrorValue('');
											}}
											error={phoneNumberErrorValue}
											required={true}
										/>
										<Button.Primary style={{marginTop: '1.5rem', padding: '1rem'}}>
											Получить код
										</Button.Primary>
										<span className={styles.Authorization__terms}>
										Нажимая на кнопку, Вы соглашаетесь с <Link href="#"><a>условиями обработки данных </a></Link>
									</span>
									</form>
								</CardContainer>
							)}
							{currentPhoneStep === 1 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h2 className={styles.Authorization__title}>Подтверждение</h2>
										<div className={styles.Authorization__confirmation}>
											<span>Мы отправили код на номер</span>
											<strong>{phoneNumberValue}</strong>
											<Button.Secondary
												small={true}
												onClick={() => {
													setCurrentPhoneStep((prevState) => prevState - 1);
												}}
											>
												Изменить
											</Button.Secondary>
										</div>
										<Form.Input
											type="text"
											placeholder="Введите код"
											style={{padding: '8px 0'}}
											maxlength={4}
											value={confirmationCodeValue}
											onInput={(event) => {
												setConfirmationCodeValue(event.target.value);
												setConfirmationCodeErrorValue('');
												
												if (event.target.value.length === 4 && confirmationCode !== event.target.value) {
													setConfirmationCodeErrorValue('Неверно указан код');
												} else if (event.target.value.length === 4) {
													setCurrentPhoneStep((prevState) => prevState + 1);
												}
											}}
											error={confirmationCodeErrorValue}
										/>
										<Button.Secondary
											small={true}
											disabled={codeTimeValue > 0}
											style={{marginTop: '1rem'}}
											onClick={() => setCodeTimeValue(45)}
										>
											{codeTimeValue > 0 ? `Отправить повторно через ${codeTimeValue} сек.` : 'Отправить повторно'}
										</Button.Secondary>
									</div>
								</CardContainer>
							)}
							{currentPhoneStep === 2 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h2 className={styles.Authorization__title}>Ваш профиль создан</h2>
										<em className={styles.Authorization__subtitle}>Заполните Ваши персональные данные</em>
										<div className={styles.Authorization__row}>
											<Form.Input type="text" placeholder="Имя" style={{padding: '8px 0'}}/>
											<Form.Input type="text" placeholder="Фамилия" style={{padding: '8px 0'}}/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input
												type="text"
												htmlType="email"
												placeholder="Ваша электронная почта"
												style={{padding: '8px 0'}}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input type="date" placeholder="Дата рождения" style={{padding: '8px 0'}}/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input
												type="text"
												placeholder="Город"
												style={{padding: '8px 0'}}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Checkbox
												value="Согласен получать рассылку на новые экскурсии и другие рекламные материалы"
												label="Согласен получать рассылку на новые экскурсии и другие рекламные материалы"
												alt={true}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Button.Primary>Продолжить</Button.Primary>
										</div>
										<div className={styles.Authorization__row}>
											<Button.Secondary
												style={{
													padding: '0.75rem 1.5rem',
													backgroundColor: 'rgba(240, 81, 93, 0.05)',
													borderRadius: '6px',
												}}
											>
												Пропустить
											</Button.Secondary>
										</div>
									</div>
								</CardContainer>
							)}
							{currentPhoneStep < 2 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h3>Другие способы входа</h3>
										<Button.Outlined
											small={true}
											style={{padding: '1rem'}}
											onClick={() => setSelectedWay(1)}
										>
											Вход по электронной почте
										</Button.Outlined>
									</div>
								</CardContainer>
							)}
							{currentPhoneStep === 1 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h3>Помощь</h3>
										<ul className={styles.Authorization__help}>
											<li><Link href="#"><a>Возникли проблемы со входом?</a></Link></li>
											<li><Link href="#"><a>Не приходит СМС?</a></Link></li>
										</ul>
									</div>
								</CardContainer>
							)}
						</div>
					)}
					{selectedWay === 1 && (
						<div className={styles.Authorization__container}>
							{currentEmailStep === 0 && (
								<CardContainer padding={16}>
									<form
										className={styles.Authorization__card}
										onSubmit={(event) => {
											event.preventDefault();
											
											setCurrentEmailStep((prevState) => prevState + 1);
											setCodeTimeValue(45);
										}}
									>
										<h2 className={styles.Authorization__title}>Вход</h2>
										<em className={styles.Authorization__subtitle}>или регистрация</em>
										<Form.Input
											type="text"
											htmlType="email"
											placeholder="example@example.com"
											style={{padding: '8px 0'}}
											icon={
												<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="7" cy="6.99994" r="7" fill="#212121"/>
													<circle cx="7" cy="3.99994" r="1" fill="white"/>
													<path d="M6 5.99994H8V11.9999H6V7.99994L4 5.99994H6Z" fill="white"/>
												</svg>
											}
											help="Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты."
											value={emailValue}
											onInput={(event) => {
												setEmailValue(event.target.value);
												emailErrorValue && setEmailErrorValue('');
											}}
											error={emailErrorValue}
											required={true}
										/>
										<Button.Primary style={{marginTop: '1.5rem', padding: '1rem'}}>
											Получить код
										</Button.Primary>
										<span className={styles.Authorization__terms}>
											Нажимая на кнопку, Вы соглашаетесь с <Link href="#"><a>условиями обработки данных </a></Link>
										</span>
									</form>
								</CardContainer>
							)}
							{currentEmailStep === 1 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h2 className={styles.Authorization__title}>Подтверждение</h2>
										<div className={styles.Authorization__confirmation}>
											<span>Мы отправили код на</span>
											<strong>{emailValue}</strong>
											<Button.Secondary
												small={true}
												onClick={() => {
													setCurrentEmailStep((prevState) => prevState - 1);
												}}
											>
												Изменить
											</Button.Secondary>
										</div>
										<Form.Input
											type="text"
											placeholder="Введите код"
											style={{padding: '8px 0'}}
											maxlength={4}
											value={confirmationCodeValue}
											onInput={(event) => {
												setConfirmationCodeValue(event.target.value);
												setConfirmationCodeErrorValue('');
												
												if (event.target.value.length === 4 && confirmationCode !== event.target.value) {
													setConfirmationCodeErrorValue('Неверно указан код');
												} else if (event.target.value.length === 4) {
													setCurrentEmailStep((prevState) => prevState + 1);
												}
											}}
											error={confirmationCodeErrorValue}
										/>
										<Button.Secondary
											small={true}
											disabled={codeTimeValue > 0}
											style={{marginTop: '1rem'}}
											onClick={() => setCodeTimeValue(45)}
										>
											{codeTimeValue > 0 ? `Отправить повторно через ${codeTimeValue} сек.` : 'Отправить повторно'}
										</Button.Secondary>
									</div>
								</CardContainer>
							)}
							{currentEmailStep === 2 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h2 className={styles.Authorization__title}>Ваш профиль создан</h2>
										<em className={styles.Authorization__subtitle}>Заполните Ваши персональные данные</em>
										<div className={styles.Authorization__row}>
											<Form.Input type="text" placeholder="Имя" style={{padding: '8px 0'}}/>
											<Form.Input type="text" placeholder="Фамилия" style={{padding: '8px 0'}}/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input
												type="text"
												htmlType="email"
												placeholder="Ваша электронная почта"
												style={{padding: '8px 0'}}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input type="date" placeholder="Дата рождения" style={{padding: '8px 0'}}/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Input
												type="text"
												placeholder="Город"
												style={{padding: '8px 0'}}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Form.Checkbox
												value="Согласен получать рассылку на новые экскурсии и другие рекламные материалы"
												label="Согласен получать рассылку на новые экскурсии и другие рекламные материалы"
												alt={true}
											/>
										</div>
										<div className={styles.Authorization__row}>
											<Button.Primary>Продолжить</Button.Primary>
										</div>
										<div className={styles.Authorization__row}>
											<Button.Secondary
												style={{
													padding: '0.75rem 1.5rem',
													backgroundColor: 'rgba(240, 81, 93, 0.05)',
													borderRadius: '6px',
												}}
											>
												Пропустить
											</Button.Secondary>
										</div>
									</div>
								</CardContainer>
							)}
							{currentEmailStep < 2 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h3>Другие способы входа</h3>
										<Button.Outlined
											small={true}
											style={{padding: '1rem'}}
											onClick={() => setSelectedWay(0)}
										>
											Вход по номеру телефона
										</Button.Outlined>
									</div>
								</CardContainer>
							)}
							{currentEmailStep === 1 && (
								<CardContainer padding={16}>
									<div className={styles.Authorization__card}>
										<h3>Помощь</h3>
										<ul className={styles.Authorization__help}>
											<li><Link href="#"><a>Возникли проблемы со входом?</a></Link></li>
											<li><Link href="#"><a>Не приходит код?</a></Link></li>
										</ul>
									</div>
								</CardContainer>
							)}
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Authorization;
