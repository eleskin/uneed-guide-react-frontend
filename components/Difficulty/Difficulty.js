import styles from './Difficulty.module.scss';

const Difficulty = ({children, icon, ...props}) => {
	return (
		<div {...props} className={styles.Difficulty}>
			{children}
			<div className={styles.Difficulty__icon}>{icon}</div>
		</div>
	);
};

export default Difficulty;
