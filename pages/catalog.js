import Container from '../components/Container/Container';
import ExcursionCard from '../components/ExcursionCard/ExcursionCard';
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
			</Container>
		</div>
	);
};

export default Catalog;
