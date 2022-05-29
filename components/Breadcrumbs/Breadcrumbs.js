import Link from 'next/link';
import {useRouter} from 'next/router';
import {getTranslatedPageName} from '../../utils/functions';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
	const router = useRouter();
	const pages = router.pathname.split('/');
	pages.push('');
	
	const indexCity = pages.indexOf('[city]');
	pages.splice(indexCity, 1);
	
	return (
		<div className={styles.Breadcrumbs}>
			{pages.map((page, index) => index !== pages.length - 1 && (
				<Link href={index < pages.length - 1 ? `/${page}` : ''} key={index}>
					<span>
						<a>
							{
								page === '' ?
									getTranslatedPageName('home', router.locale) :
									getTranslatedPageName(page, router.locale)
							}
						</a>
					</span>
				</Link>
			))}
		</div>
	);
};

export default Breadcrumbs;
