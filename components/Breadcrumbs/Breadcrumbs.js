import {useRouter} from 'next/router';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
	const router = useRouter();
	const pages = router.asPath.split('/');
	
	return (
		<div className={styles.Breadcrumbs}>
			{pages.map((page, index) => (
				<span key={index}>{page === '' ? 'Home' : page}</span>
			))}
		</div>
	);
};

export default Breadcrumbs;
