import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import ExcursionCard from '../components/ExcursionCard/ExcursionCard';
import Viewed from '../components/Viewed/Viewed';
import styles from '../styles/Catalog.module.scss';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../components/PageTitle/PageTitle';

const Catalog = () => {
	return (
		<div className={styles.Catalog}>
			<Container>
				<header className={styles.Catalog__header}>
					<Breadcrumbs/>
					<PageTitle>Каталог экскурсий</PageTitle>
				</header>
				<div className={styles.Catalog__list}>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
				</div>
				<footer className={styles.Catalog__footer}>
					<div>
						<span>16 из 56 экскурсий просмотрено</span>
						<span>Отображать по: <select><option value="16">16</option></select></span>
					</div>
					<Button.Primary>Показать еще</Button.Primary>
				</footer>
			</Container>
			<div className={styles.Catalog__viewed}>
				<Viewed/>
			</div>
		</div>
	);
};

export default Catalog;
