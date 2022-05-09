import '/styles/calendar.scss';
import '/styles/globals.scss';
import '/styles/normalize.scss';
import Head from 'next/head';
import {Fragment, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import Authorization from '../components/Authorization/Authorization';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';
import RegionSelector from '../components/RegionSelector/RegionSelector';
import store from '../store';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	const [isActiveFilter, setIsActiveFilter] = useState(store.getState()['indexSlice']['isActiveFilter']);
	const [isActiveAuthorizationModal, setIsActiveAuthorizationModal] = useState(store.getState()['indexSlice']['isActiveAuthorizationModal']);
	
	useEffect(() => {
		return store.subscribe(() => {
			setIsActiveFilter(store.getState()['indexSlice']['isActiveFilter']);
			setIsActiveAuthorizationModal(store.getState()['indexSlice']['isActiveAuthorizationModal']);
		});
	}, [setIsActiveFilter, setIsActiveAuthorizationModal, store]);
	
	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, [setWindowWidth]);
	
	useEffect(() => {
		const onResize = () => {
			if ((window.innerWidth < 768 && windowWidth >= 768) || (window.innerWidth >= 768 && windowWidth < 768)) {
				setWindowWidth(window.innerWidth);
			}
		};
		
		window.addEventListener('resize', onResize);
		
		return () => window.removeEventListener('resize', onResize);
	}, [windowWidth]);
	
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<style jsx global>
					{`
						body {
							overflow-y: ${(isActiveMenu || isActiveFilter || isActiveAuthorizationModal) && windowWidth < 768 ? 'hidden' : 'auto '}
						}
					`}
				</style>
				<Header isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} headerHeight={headerHeight} setHeaderHeight={setHeaderHeight}/>
				<Menu
					isActiveMenu={isActiveMenu}
					setIsActiveMenu={setIsActiveMenu}
					style={{
						height: `calc(100% - ${headerHeight}px)`,
						transform: !isActiveMenu ? `translateY(calc(-100% - ${headerHeight}px))` : 'translateY(0)',
					}}
				/>
				<Component {...pageProps} headerHeight={headerHeight} />
				<Footer/>
				<Navbar/>
				<RegionSelector/>
				<Authorization headerHeight={headerHeight}/>
			</Fragment>
		</Provider>
	);
};

export default App;
