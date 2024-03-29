import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {createRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsActiveRegionSelector} from '../../store/slices';
import {getAll} from '../../store/slices/geolocation';
import {getCityName} from '../../utils/functions';
import {useOutsideClickHandler} from '../../utils/hooks';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import styles from './Menu.module.scss';

const Menu = ({isActiveMenu, setIsActiveMenu, ...props}) => {
	const menuRef = createRef();
	const router = useRouter();
	const dispatch = useDispatch();
	const [languageFile, setLanguageFile] = useState();
	const selectedCity = useSelector((state) => state['geolocationSlice']['selectedCity']);
	const isAuth = useSelector((state) => state['userSlice']['isAuth']);
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	useEffect(() => {
		dispatch(getAll());
	}, [dispatch]);
	
	useOutsideClickHandler(menuRef, isActiveMenu, setIsActiveMenu);
	
	const buttonClickHandler = () => {
		dispatch(setIsActiveRegionSelector(true));
		setIsActiveMenu(false);
	};
	
	const [activeCity, setActiveCity] = useState('Москве');
	
	useEffect(() => {
		setActiveCity(getCityName(selectedCity, router, 'prepositional'));
	}, [router, selectedCity]);
	
	return (
		<div {...props} className={`${styles.Menu} ${isActiveMenu ? styles.Menu_active : ''}`} ref={menuRef}>
			{isAuth ? (
				<div className={styles.Menu__profile}>
					<div className={styles.Menu__image}>
						<Image src="/assets/images/profile/profile-image.png" width={50} height={50} alt=""/>
					</div>
					<div>
						<strong>Ангелина С.</strong>
						<em>Москва (ваш регион)</em>
					</div>
				</div>
			) : (
				<header className={styles.Menu__header}>
					<Button.Secondary>{languageFile?.['menu']?.['authorization-button']}</Button.Secondary>
					<Button.Primary>{languageFile?.['menu']?.['registration-button']}</Button.Primary>
				</header>
			)}
			<div className={styles.Menu__search}>
				<label>
					<input type="text" placeholder={languageFile?.['menu']?.['example-input']}/>
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.8989 10.3301L15.1513 15.1041C15.2248 15.1866 15.2151 15.3102 15.1296 15.3801L14.4237 15.9582C14.3383 16.0282 14.2094 16.0181 14.136 15.9356L9.88356 11.1616L10.8989 10.3301Z" fill="#B9BFC5"/>
						<path d="M12.469 6.21694C12.469 9.35466 9.80973 11.9339 6.48451 11.9339C3.15929 11.9339 0.5 9.35466 0.5 6.21694C0.5 3.07921 3.15929 0.5 6.48451 0.5C9.80973 0.5 12.469 3.07921 12.469 6.21694Z" stroke="#B9BFC5"/>
					</svg>
				</label>
				<span>
					{languageFile?.['menu']?.['latest-queries']}: <b>водные экскурсии, экскурсия в музее</b>
				</span>
			</div>
			<Navigation/>
			<footer className={styles.Menu__footer}>
				<div className={styles.Menu__title}>
					<h4>{languageFile?.['menu']?.['places-title']} {activeCity}</h4>
					<button onClick={buttonClickHandler}>{languageFile?.['menu']?.['places-city-change']}</button>
				</div>
				<ul className={styles.Menu__places}>
					<li>
						<Link href="#">
							<a>
								<i>
									5.0
									<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.1518 0.795665C9.88302 0.543416 9.56389 0.343314 9.21265 0.206791C8.86141 0.0702686 8.48493 0 8.10473 0C7.72453 0 7.34806 0.0702686 6.99682 0.206791C6.64558 0.343314 6.32645 0.543416 6.05767 0.795665L5.49986 1.31893L4.94205 0.795665C4.39913 0.286378 3.66278 0.000263981 2.89498 0.000263987C2.12719 0.000263992 1.39084 0.286378 0.847921 0.795665C0.305006 1.30495 5.72054e-09 1.99569 0 2.71593C-5.72054e-09 3.43617 0.305006 4.12692 0.847921 4.6362L1.40573 5.15946L5.49986 9L9.59399 5.15946L10.1518 4.6362C10.4207 4.38407 10.634 4.08471 10.7796 3.75523C10.9251 3.42574 11 3.07258 11 2.71593C11 2.35928 10.9251 2.00613 10.7796 1.67664C10.634 1.34716 10.4207 1.0478 10.1518 0.795665V0.795665Z" fill="#F0515D"/>
									</svg>
								</i>
								<span>Обзорная прогулка по Москве с личным гидом</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<i>
									4.9
									<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.1518 0.795665C9.88302 0.543416 9.56389 0.343314 9.21265 0.206791C8.86141 0.0702686 8.48493 0 8.10473 0C7.72453 0 7.34806 0.0702686 6.99682 0.206791C6.64558 0.343314 6.32645 0.543416 6.05767 0.795665L5.49986 1.31893L4.94205 0.795665C4.39913 0.286378 3.66278 0.000263981 2.89498 0.000263987C2.12719 0.000263992 1.39084 0.286378 0.847921 0.795665C0.305006 1.30495 5.72054e-09 1.99569 0 2.71593C-5.72054e-09 3.43617 0.305006 4.12692 0.847921 4.6362L1.40573 5.15946L5.49986 9L9.59399 5.15946L10.1518 4.6362C10.4207 4.38407 10.634 4.08471 10.7796 3.75523C10.9251 3.42574 11 3.07258 11 2.71593C11 2.35928 10.9251 2.00613 10.7796 1.67664C10.634 1.34716 10.4207 1.0478 10.1518 0.795665V0.795665Z" fill="#F0515D"/>
									</svg>
								</i>
								<span>Кронштадт — Никольский (Морской) собор и Петровский док</span>
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a>
								<i>
									4.9
									<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.1518 0.795665C9.88302 0.543416 9.56389 0.343314 9.21265 0.206791C8.86141 0.0702686 8.48493 0 8.10473 0C7.72453 0 7.34806 0.0702686 6.99682 0.206791C6.64558 0.343314 6.32645 0.543416 6.05767 0.795665L5.49986 1.31893L4.94205 0.795665C4.39913 0.286378 3.66278 0.000263981 2.89498 0.000263987C2.12719 0.000263992 1.39084 0.286378 0.847921 0.795665C0.305006 1.30495 5.72054e-09 1.99569 0 2.71593C-5.72054e-09 3.43617 0.305006 4.12692 0.847921 4.6362L1.40573 5.15946L5.49986 9L9.59399 5.15946L10.1518 4.6362C10.4207 4.38407 10.634 4.08471 10.7796 3.75523C10.9251 3.42574 11 3.07258 11 2.71593C11 2.35928 10.9251 2.00613 10.7796 1.67664C10.634 1.34716 10.4207 1.0478 10.1518 0.795665V0.795665Z" fill="#F0515D"/>
									</svg>
								</i>
								<span>Билеты в Кремль и Оружейную палату</span>
							</a>
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Menu;
