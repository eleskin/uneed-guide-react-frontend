import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import {Provider} from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import store from '../store';

const App = ({Component, pageProps}) => {
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<Navigation/>
				<Component {...pageProps} />
			</Fragment>
		</Provider>
	);
};

export default App;
