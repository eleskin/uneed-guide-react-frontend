import '/styles/normalize.scss';
import '/styles/globals.scss';
import '/styles/calendar.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import {Provider} from 'react-redux';
import FirstScreen from '../components/FirstScreen/FirstScreen';
import store from '../store';
import RegionSelector from '../components/RegionSelector/RegionSelector';

const App = ({Component, pageProps}) => {
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<FirstScreen/>
				<Component {...pageProps} />
				<RegionSelector/>
			</Fragment>
		</Provider>
	);
};

export default App;
