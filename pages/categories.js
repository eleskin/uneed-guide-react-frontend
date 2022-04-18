import Container from '../components/Container/Container';
import styles from '../styles/Catalog.module.scss';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../components/PageTitle/PageTitle';

const Catalog = () => {
	return (
		<div className={styles.Catalog}>
			<Container>
				<header className={styles.Catalog__header}>
					<Breadcrumbs/>
					<PageTitle>Категории</PageTitle>
				</header>
			</Container>
		</div>
	);
};

export default Catalog;
