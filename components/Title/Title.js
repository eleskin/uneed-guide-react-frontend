import styles from './Title.module.scss';

const Title = ({children, ...props}) => {
	return (
		<h2 {...props} className={styles.Title}>{children}</h2>
	);
};

export default Title;
