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
					<CardContainer></CardContainer>
					<CardContainer>
						<h3>Персональная информация</h3>
					</CardContainer>
					<CardContainer>
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
