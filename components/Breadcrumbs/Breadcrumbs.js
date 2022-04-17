import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
	const router = useRouter();
	const pages = router.asPath.split('/');
	
	return (
		<div className={styles.Breadcrumbs}>
			{pages.map((page, index) => index !== pages.length - 1 && (
				<Link href={index < pages.length - 1 ?`/${page}` : ''} key={index}>
					<span><a>{page === '' ? 'Home' : page}</a></span>
				</Link>
			))}
		</div>
	);
};

export default Breadcrumbs;
