import Link from 'next/link';
import {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getAll} from '../../store/slices/navigation';
import styles from './Navigation.module.scss';

const Navigation = ({mainMenuElements}) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getAll());
	}, [dispatch]);
	
	const navigationDesktopElements = mainMenuElements.map((mainMenuElement, index) => (
		<div className={styles.Navigation__column} key={index}>
			<h6>
				<Link href={mainMenuElement.url}><a target={mainMenuElement.target}>{mainMenuElement.name}</a></Link>
			</h6>
			<ul>
				{mainMenuElement['childs'].map((link, index) => (
					<li key={index}><Link href={link.url}><a target={link.target}>{link.name}</a></Link></li>
				))}
			</ul>
		</div>
	));
	
	return (
		<nav className={styles.Navigation}>
			<div className={styles.Navigation__mobile}>
				<div className={styles.Navigation__row}>
					<h6>Навигация</h6>
					<ul>
						<li>
							<Link href="#"><a>Каталог экскурсий</a></Link>
						</li>
						<li>
							<Link href="#"><a>Условия оплаты и возврата</a></Link>
						</li>
						<li>
							<Link href="#"><a>Частозадаваемые вопросы</a></Link>
						</li>
						<li>
							<Link href="#"><a>Блог</a></Link>
						</li>
						<li>
							<Link href="#"><a>Контакты</a></Link>
						</li>
					</ul>
				</div>
				<div className={styles.Navigation__row}>
					<h6>Каталог экскурсий</h6>
					<ul>
						<li>
							<Link href="#"><a>Дневные экскурсии</a></Link>
						</li>
						<li>
							<Link href="#"><a>Метеоры</a></Link>
						</li>
						<li>
							<Link href="#"><a>Ночные экскурсии</a></Link>
						</li>
						<li>
							<Link href="#"><a>Крепость Орешек</a></Link>
						</li>
						<li>
							<Link href="#"><a>Праздники</a></Link>
						</li>
						<li>
							<Link href="#"><a>Петергоф</a></Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.Navigation__desktop}>
				<div className={styles.Navigation__top}>
					{navigationDesktopElements}
				</div>
			</div>
		</nav>
	);
};

export default connect(
	(state, props) => ({
		mainMenuElements: state.navigationSlice.mainMenuElements,
		props: props,
	}),
)(Navigation);
