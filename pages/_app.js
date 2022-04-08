import '/styles/normalize.scss';
import '/styles/globals.scss';
import '/styles/calendar.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import UpcomingExcursions from '../components/UpcomingExcursions/UpcomingExcursions';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<UpcomingExcursions/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
