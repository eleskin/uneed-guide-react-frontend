import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import {Provider} from 'react-redux';
import RegionSelect from '../components/RegionSelect/RegionSelect';
import RegionSelector from '../components/RegionSelector/RegionSelector';
import store from '../store';

const App = ({Component, pageProps}) => {
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<RegionSelect/>
				<Component {...pageProps} />
				<RegionSelector/>
			</Fragment>
		</Provider>
	);
};

export default App;
