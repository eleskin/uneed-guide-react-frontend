import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import FirstScreen from '../components/FirstScreen/FirstScreen';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<FirstScreen/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
