import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment, useState} from 'react';
import {Provider} from 'react-redux';
import Menu from '../components/Menu/Menu';
import RegionSelector from '../components/RegionSelector/RegionSelector';
import store from '../store';

const App = ({Component, pageProps}) => {
	const [isActiveMenu, setIsActiveMenu] = useState(true);
	
	return (
		<Provider store={store}>
			<Fragment>
				<Head>
					<title>Uneed Guide</title>
				</Head>
				<Menu isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu}/>
				<Component {...pageProps} />
				<RegionSelector/>
			</Fragment>
		</Provider>
	);
};

export default App;
