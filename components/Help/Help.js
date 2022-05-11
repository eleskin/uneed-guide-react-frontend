import Link from 'next/link';
import styles from './Help.module.scss';

const Help = ({links}) => {
	const linksList = links.map((link, index) => (
		<li key={index}><Link href={link.href}><a>{link.text}</a></Link></li>
	))
	
	return (
		<ul className={styles.Help}>
			{linksList}
		</ul>
	);
};

export default Help;
