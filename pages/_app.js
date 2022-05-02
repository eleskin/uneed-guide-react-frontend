import '/styles/normalize.scss';
import '/styles/globals.scss';
import '/styles/calendar.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import {Provider} from 'react-redux';
import UpcomingExcursions from '../components/UpcomingExcursions/UpcomingExcursions';
import store from '../store';

const App = ({Component, pageProps}) => {
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<UpcomingExcursions/>
				<Component {...pageProps} />
			</Fragment>
		</Provider>
	);
};

export default App;
