import { Provider } from 'react-redux';
import { useStore } from '../story';
import Header from '../components/layout/header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
