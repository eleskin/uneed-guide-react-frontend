import styles from './Container.module.scss';

const Container = ({children, isMainPage = false}) => {
	return (
		<div className={`${styles.Container} ${isMainPage ? styles.Container_main : ''}`}>{children}</div>
	);
};

export default Container;
