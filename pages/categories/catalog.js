import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import {CustomSelect, Option} from '../../components/CustomSelect/CustomSelect';
import ExcursionCard from '../../components/ExcursionCard/ExcursionCard';
import Viewed from '../../components/Viewed/Viewed';
import styles from '../../styles/Catalog.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../../components/PageTitle/PageTitle';
import {Fragment, useState} from 'react';

const Catalog = () => {
	const [selectValue, setSelectValue] = useState('');
	
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
						<div className={styles.Catalog__counts}>
							Отображать по:
							<CustomSelect value={selectValue} callback={setSelectValue} small={true}>
								<Fragment>
									<Option value={16}>16</Option>
									<Option value={24}>24</Option>
									<Option value={32}>32</Option>
								</Fragment>
							</CustomSelect>
						</div>
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
