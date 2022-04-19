import {useRouter} from 'next/router';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import {CustomSelect, Option} from '../../components/CustomSelect/CustomSelect';
import ExcursionCard from '../../components/ExcursionCard/ExcursionCard';
import Filter from '../../components/Filter/Filter';
import Viewed from '../../components/Viewed/Viewed';
import styles from '../../styles/Catalog.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../../components/PageTitle/PageTitle';
import {Fragment, useState, useEffect} from 'react';

const Catalog = () => {
	const [selectValue, setSelectValue] = useState('');
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	return (
		<div className={styles.Catalog}>
			<Container>
				<header className={styles.Catalog__header}>
					<Breadcrumbs/>
					<PageTitle>{languageFile?.['catalog-page']?.['title']}</PageTitle>
				</header>
				<Filter/>
				<div className={styles.Catalog__list}>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
					<ExcursionCard small={true} catalog={true}/>
				</div>
				<footer className={styles.Catalog__footer}>
					<div>
						<span>
							16 {languageFile?.['catalog-page']?.['pagination']?.['first-part']} 56 {languageFile?.['catalog-page']?.['pagination']?.['second-part']}
						</span>
						<div className={styles.Catalog__counts}>
							{languageFile?.['catalog-page']?.['text-counts']}
							<CustomSelect value={selectValue} callback={setSelectValue} small={true}>
								<Fragment>
									<Option value={16}>16</Option>
									<Option value={24}>24</Option>
									<Option value={32}>32</Option>
								</Fragment>
							</CustomSelect>
						</div>
					</div>
					<Button.Primary>{languageFile?.['catalog-page']?.['text-button']}</Button.Primary>
				</footer>
			</Container>
			<div className={styles.Catalog__viewed}>
				<Viewed/>
			</div>
		</div>
	);
};

export default Catalog;
