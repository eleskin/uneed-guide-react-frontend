import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment, useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import {Provider} from 'react-redux';
import store from '../store';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	
	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, [setWindowWidth]);
	
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}
	
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<style jsx global>
					{
						`body {
						overflow: ${isActiveMenu && windowWidth < 768 ? 'hidden' : 'auto '}
					}`
					}
				</style>
				<Header isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} setHeaderHeight={setHeaderHeight}/>
				<Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} style={{height: `calc(100% - ${headerHeight}px)`}}/>
				<Component {...pageProps} />
				<Footer/>
				<Navbar/>
			</Fragment>
		</Provider>
	);
};

export default App;
