import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment, useState} from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<style jsx global>{`body {overflow: ${isActiveMenu ? 'hidden' : 'auto '}}`}</style>
			<Header isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu}/>
			<Menu isActiveMenu={isActiveMenu}/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
