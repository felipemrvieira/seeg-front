import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Routes from './routes';
const Routes = React.lazy(() => import('./routes'));

function App() {
	return (
		<HashRouter>
			<ToastContainer />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes />
			</Suspense>
		</HashRouter>
	);
}

export default App;
