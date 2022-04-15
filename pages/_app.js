import '/styles/normalize.scss';
import '/styles/globals.scss';
import '/styles/calendar.scss';
import Head from 'next/head';
import {Fragment, useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import {Provider} from 'react-redux';
import store from '../store';
import RegionSelector from '../components/RegionSelector/RegionSelector';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	
	
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
					{`body {overflow-y: ${isActiveMenu && windowWidth < 768 ? 'hidden' : 'auto '}}`}
				</style>
				<Header isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} headerHeight={headerHeight} setHeaderHeight={setHeaderHeight}/>
				<Menu
					isActiveMenu={isActiveMenu}
					setIsActiveMenu={setIsActiveMenu}
					style={{
						height: `calc(100% - ${headerHeight}px)`,
						transform: !isActiveMenu ? `translateY(calc(-100% - ${headerHeight}px))` : 'translateY(0)'
					}}
				/>
				<Component {...pageProps} />
				<Footer/>
				<Navbar/>
				<RegionSelector/>
			</Fragment>
		</Provider>
	);
};

export default App;
