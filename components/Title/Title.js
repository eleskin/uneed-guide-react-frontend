import styles from './Title.module.scss';

const Title = ({children}) => {
	return (
		<h2 className={styles.Title}>{children}</h2>
	);
};

export default Title;
