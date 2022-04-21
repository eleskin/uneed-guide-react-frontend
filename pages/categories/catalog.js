import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import {CustomSelect, Option} from '../../components/CustomSelect/CustomSelect';
import ExcursionCard from '../../components/ExcursionCard/ExcursionCard';
import Filter from '../../components/Filter/Filter';
import Viewed from '../../components/Viewed/Viewed';
import {setIsActiveFilter} from '../../store/slices';
import styles from '../../styles/Catalog.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../../components/PageTitle/PageTitle';
import {Fragment, useState, useEffect} from 'react';
import Form from '../../ui/Form/Form';

const Catalog = () => {
	const [selectValue, setSelectValue] = useState('');
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	const dispatch = useDispatch();
	const [sortBy, setSortBy] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	return (
		<div className={styles.Catalog}>
			<Filter/>
			<Container>
				<header className={styles.Catalog__header}>
					<Breadcrumbs/>
					<PageTitle>{languageFile?.['catalog-page']?.['title']}</PageTitle>
				</header>
				<div className={styles.Catalog__filter}>
					<Form.Select value={sortBy} callback={setSortBy} isSort={true}>
						<Fragment>
							<Form.Option value="По рейтингу">По рейтингу</Form.Option>
							<Form.Option value="По популярности">По популярности</Form.Option>
							<Form.Option value="По цене">По цене</Form.Option>
						</Fragment>
					</Form.Select>
					<button onClick={() => dispatch(setIsActiveFilter(true))}>
						<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="2" width="19" height="1" fill="#F0515D"/>
							<rect y="9" width="19" height="1" fill="#F0515D"/>
							<rect x="4.5" y="0.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
							<rect x="11.5" y="7.5" width="4" height="4" rx="2" fill="white" stroke="#F0515D"/>
						</svg>
					</button>
				</div>
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
