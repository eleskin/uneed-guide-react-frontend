import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import RegionSelect from '../components/RegionSelect/RegionSelect';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<RegionSelect/>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
