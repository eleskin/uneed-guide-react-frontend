import styles from './WeekCalendar.module.scss';

const WeekCalendar = () => {
	return (
		<div className={styles.WeekCalendar}>
			<header className={styles.WeekCalendar__header}>
				<i>3 марта - Пятница</i>
				<div>
					<button disabled={true}>
						<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0 3L3.24324 6L4 5.3L1.51351 3L4 0.7L3.24324 0L0 3Z" fill="white"/>
						</svg>
					</button>
					<button>
						<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M4 3L0.756757 6L1.27264e-07 5.3L2.48649 3L1.27264e-07 0.7L0.756757 0L4 3Z" fill="white"/>
						</svg>
					</button>
				</div>
			</header>
			<div className={styles.WeekCalendar__days}>
				<span>Пн</span>
				<span>Вт</span>
				<span>Ср</span>
				<span>Чт</span>
				<span>Пт</span>
				<span>Сб</span>
				<span>Вс</span>
			</div>
			<div className={styles.WeekCalendar__dates}>
				<button className={styles.WeekCalendar__date} disabled={true}>27</button>
				<button className={styles.WeekCalendar__date} disabled={true}>28</button>
				<button className={styles.WeekCalendar__date} disabled={true}>1</button>
				<button className={`${styles.WeekCalendar__date} ${styles.WeekCalendar__date_active}`}>2</button>
				<button className={styles.WeekCalendar__date}>3</button>
				<button className={styles.WeekCalendar__date}>4</button>
				<button className={styles.WeekCalendar__date}>5</button>
			</div>
		</div>
	);
};

export default WeekCalendar;
