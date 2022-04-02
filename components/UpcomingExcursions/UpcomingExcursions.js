import styles from './UpcomingExcursions.module.scss';

const UpcomingExcursions = () => {
	return (
		<div className={styles.UpcomingExcursions}>
			<header className={styles.UpcomingExcursions__header}>
				<span>Ближайшие экскурсии</span>
				<div className={styles.UpcomingExcursions__loader}>
					<span/><span/><span/><span/>
				</div>
			</header>
			<div className={styles.UpcomingExcursions__card}>
			
			</div>
		</div>
	);
};

export default UpcomingExcursions;
