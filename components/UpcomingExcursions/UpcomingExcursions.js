import styles from './UpcomingExcursions.module.scss';

const UpcomingExcursions = () => {
	return (
		<div className={styles.UpcomingExcursions}>
			<header className={styles.UpcomingExcursions__header}>
				<span>Ближайшие экскурсии</span>
				<div className={styles.UpcomingExcursions__loader}>
					<div className={`${styles.UpcomingExcursions__dot} ${styles.UpcomingExcursions__dot_active}`}>
						<span/>
					</div>
					<div className={styles.UpcomingExcursions__dot}>
						<span/>
					</div>
					<div className={styles.UpcomingExcursions__dot}>
						<span/>
					</div>
					<div className={styles.UpcomingExcursions__dot}>
						<span/>
					</div>
				</div>
			</header>
			<div className={styles.UpcomingExcursions__card}>
			
			</div>
		</div>
	);
};

export default UpcomingExcursions;
