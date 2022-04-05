import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Navbar from '../components/Navbar/Navbar';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Navbar/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
