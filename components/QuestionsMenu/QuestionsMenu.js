import Link from 'next/link';
import styles from './QuestionsMenu.module.scss';

const QuestionsMenu = ({title, links}) => {
	const linksList = links.map((link, index) => (
		<li key={index}><Link href={link.href}><a>{link.text}</a></Link></li>
	));
	
	return (
		<div className={styles.QuestionsMenu}>
			<header>
				<strong>{title}</strong>
			</header>
			<ul>{linksList}</ul>
		</div>
	);
};

export default QuestionsMenu;
