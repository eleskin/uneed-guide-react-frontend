import styles from './PageTitle.module.scss'

const PageTitle = ({children}) => {
	return (
		<h1 className={styles.PageTitle}>{children}</h1>
	);
};

export default PageTitle;
