import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Header from '../components/Header/Header';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Header/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
