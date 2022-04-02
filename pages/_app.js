import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Header/>
			<Menu/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
