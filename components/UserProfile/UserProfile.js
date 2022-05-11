import Image from 'next/image';
import Help from '../Help/Help';
import styles from './UserProfile.module.scss';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import Container from '../Container/Container';

const UserProfile = () => {
	return (
		<div className={styles.UserProfile}>
			<Container>
				<h1 className={styles.UserProfile__title}>Профиль</h1>
				<div className={styles.UserProfile__container}>
					<CardContainer padding={16}>
						<div className={styles.UserProfile__profile}>
							<div className={styles.UserProfile__image}>
								<Image src="/assets/images/profile/profile-image.png" width={84} height={84} alt=""/>
							</div>
							<div>
								<strong>Ангелина С.</strong>
								<span>Зарегистрированы 19.02.2022</span>
							</div>
						</div>
					</CardContainer>
					<CardContainer padding={16}>
						<h3>Персональная информация</h3>
						<ul className={styles.UserProfile__info}>
							<li>Ангелина Сергеева</li>
							<li>Angelina.c@mail.com</li>
							<li>Москва</li>
						</ul>
					</CardContainer>
					<CardContainer padding={16}>
						<h3>Помощь</h3>
						<Help
							links={[
								{text: 'Задать вопрос', href: '#'},
								{text: 'Частозадаваемые вопросы', href: '#'},
								{text: 'Контакты', href: '#'},
							]}
						/>
					</CardContainer>
				</div>
				<Button.Primary small={true} style={{padding: '0.75rem 0'}}>Изменить данные аккаунта</Button.Primary>
				<Button.Outlined small={true} style={{padding: '0.75rem 0'}}>Выйти</Button.Outlined>
			</Container>
		</div>
	);
};

export default UserProfile;
