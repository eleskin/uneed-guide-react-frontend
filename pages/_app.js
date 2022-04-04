import '/styles/normalize.scss';
import '/styles/globals.scss';
import Head from 'next/head';
import {Fragment} from 'react';
import Button from '../components/Button/Button';

const App = ({Component, pageProps}) => {
	return (
		<Fragment>
			<Head>
				<title>Uneed Guide</title>
			</Head>
			<div>
				<Button.Primary>Primary Button</Button.Primary>
			</div>
			<div>
				<Button.Outlined>Outlined Button</Button.Outlined>
			</div>
			<div>
				<Button.Secondary>Secondary Button</Button.Secondary>
			</div>
			<div>
				<Button.Primary small={true}>Primary Button</Button.Primary>
			</div>
			<div>
				<Button.Outlined small={true}>Outlined Button</Button.Outlined>
			</div>
			<div>
				<Button.Secondary small={true}>Secondary Button</Button.Secondary>
			</div>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default App;
