import {useState, Fragment} from 'react';
import Form from '../../ui/Form/Form';
import styles from './Filter.module.scss';

const Filter = () => {
	const [category, setCategory] = useState();
	const [city, setCity] = useState();
	
	return (
		<div className={styles.Filter}>
			<Form.Select value={category} callback={setCategory} title="Категория">
				<Fragment>
					<Form.Option value="По рейтингу">По рейтингу</Form.Option>
					<Form.Option value="По популярности">По популярности</Form.Option>
					<Form.Option value="По цене">По цене</Form.Option>
				</Fragment>
			</Form.Select>
			<Form.Select value={city} callback={setCity} title="Категория">
				<Fragment>
					<Form.Option value="Москва">Москва</Form.Option>
					<Form.Option value="Санкт-Петербург">Санкт-Петербург</Form.Option>
					<Form.Option value="Мурманск">Мурманск</Form.Option>
				</Fragment>
			</Form.Select>
			<button></button>
		</div>
	);
};

export default Filter;
