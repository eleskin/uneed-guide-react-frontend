import Link from 'next/link';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
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

const Catalog = ({headerHeight}) => {
	const [selectValue, setSelectValue] = useState('');
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	const dispatch = useDispatch();
	const [sortBy, setSortBy] = useState();
	const options = ['рейтингу', 'популярности', 'цене', 'размеру скидки'];
	const isActiveFilter = useSelector((state) => state['indexSlice']['isActiveFilter']);
	
	const optionsSelectList = options.map((option, index) => (
		<Form.Option value={`${option}`} key={index}>{option}</Form.Option>
	));
	
	const optionsList = options.map((option, index) => (
		<li key={index}>
			<Link href="#">
				<a
					className={`${styles.Catalog__option} ${sortBy === options[index] ? styles.Catalog__option_active : ''}`}
					onClick={() => setSortBy(option)}
				>{option}
				</a>
			</Link>
		</li>
	));
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	return (
		<div className={styles.Catalog}>
			<Container>
				<header className={`${styles.Catalog__header} ${isActiveFilter ? styles.Catalog__header_hidden : ''}`}>
					<Breadcrumbs/>
					<PageTitle>{languageFile?.['catalog-page']?.['title']}</PageTitle>
				</header>
				<Filter headerHeight={headerHeight} isActiveFilter={isActiveFilter}/>
				<div className={styles.Catalog__filter}>
					<div className={styles.Catalog__select}>
						<Form.Select value={sortBy} callback={setSortBy} isSort={true}>
							<Fragment>{optionsSelectList}</Fragment>
						</Form.Select>
					</div>
					<div className={styles.Catalog__sort}>
						<span>{languageFile?.['catalog-page']?.['text-sort']}</span>
						<ul>{optionsList}</ul>
					</div>
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
