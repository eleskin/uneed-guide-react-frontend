import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getAll} from '../../store/slices/navigation';
import styles from './Navigation.module.scss';

const Navigation = ({mainMenuElements}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [languageFile, setLanguageFile] = useState();
	
	useEffect(() => {
		if (router.locale) {
			import(`../../languages/${router.locale}.json`).then((language) => setLanguageFile(language.default));
		}
	}, [setLanguageFile, router.locale]);
	
	
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
					<h6>{languageFile?.['navigation']?.['navigation-title']}</h6>
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
					<h6>{languageFile?.['navigation']?.['catalog-title']}</h6>
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
