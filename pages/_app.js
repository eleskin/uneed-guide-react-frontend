import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment, useState} from 'react';
import Menu from '../components/Menu/Menu';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(true);
	
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu}/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
