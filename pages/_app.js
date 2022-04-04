import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Footer from '../components/Footer/Footer';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<Footer/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
