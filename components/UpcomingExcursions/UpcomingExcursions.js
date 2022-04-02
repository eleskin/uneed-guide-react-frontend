import Button from '../Button/Button';
import styles from './UpcomingExcursions.module.scss';
import Image from 'next/image';

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
				<div className={styles.UpcomingExcursions__image}>
					<Image
						src="/assets/images/upcoming-excursions/upcoming-excursions-image-1.png"
						width={288}
						height={160}
						layout="responsive"
						alt=""
					/>
				</div>
				<header className={styles.UpcomingExcursions__header}>
					<h3>Экскурсия по Москва-реке</h3>
					<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-clock.svg"
							width={14}
							height={14}
							alt=""
						/>
						1ч. 30 мин.
					</span>
					<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-crosshair.svg"
							width={14}
							height={14}
							alt=""
						/>
						Причал  “Мост Ломоносова”
					</span>
					<span>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-departure.svg"
							width={14}
							height={14}
							alt=""
						/>
						Каждые 30 мин.
					</span>
				</header>
				<div className={styles.UpcomingExcursions__departures}>
					<span>Ближайшие отправления:</span>
					<div>
						<button>12:45</button>
						<button>14:25</button>
						<button>16:25</button>
						<button>
							<Image
								src="/assets/images/first-screen/first-screen-calendar.svg"
								width={16}
								height={14}
								alt=""
							/>
						</button>
					</div>
				</div>
				<div className={styles.UpcomingExcursions__discount}>
					<Image
						src="/assets/images/upcoming-excursions/upcoming-excursions-percent.svg"
						width={14}
						height={14}
						alt=""
					/>
					<strong>От 350 ₽</strong>
					<span>450 ₽</span>
				</div>
				<div className={styles.UpcomingExcursions__tariffs}>
					<div className={styles.UpcomingExcursions__tariff}>
						<span>Взрослый</span>
						<div>
							<strong>450 ₽</strong>
							<span>550 ₽</span>
							<button>
								<Image
									src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
									width={14}
									height={14}
									alt=""
								/>
							</button>
						</div>
					</div>
					<div className={styles.UpcomingExcursions__tariff}>
						<span>Детский</span>
						<div>
							<strong>350 ₽</strong>
							<span>450 ₽</span>
							<button>
								<Image
									src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
									width={14}
									height={14}
									alt=""
								/>
							</button>
						</div>
					</div>
					<div className={styles.UpcomingExcursions__tariff}>
						<span>Взрослый (с ланчем)</span>
						<div>
							<strong>480 ₽</strong>
							<span>580 ₽</span>
							<button>
								<Image
									src="/assets/images/upcoming-excursions/upcoming-excursions-cart.svg"
									width={14}
									height={14}
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>
				<footer className={styles.UpcomingExcursions__footer}>
					<Button.Primary
						small={true}
						style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
					>
						Купить
					</Button.Primary>
					<Button.Outlined
						small={true}
						style={{paddingLeft: '1.3rem', paddingRight: '1.3rem'}}
					>
						Подробнее
					</Button.Outlined>
					<Button.Outlined
						small={true}
						style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}
					>
						<Image
							src="/assets/images/upcoming-excursions/upcoming-excursions-heart.svg"
							width={16}
							height={16}
//							layout="fill"
							alt=""
						/>
					</Button.Outlined>
				</footer>
			</div>
		</div>
	);
};

export default UpcomingExcursions;
