import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Navigation from '../components/Navigation/Navigation';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Navigation/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
