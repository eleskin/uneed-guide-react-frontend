import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Footer from '../components/Footer/Footer';
import {Provider} from 'react-redux';
import store from '../store';

const App = ({Component, pageProps}) => {
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<Footer/>
				<Component {...pageProps} />
			</Fragment>
		</Provider>
	);
};

export default App;
