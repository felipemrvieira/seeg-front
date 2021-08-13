import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Carregado quando necessário

import 'react-toastify/dist/ReactToastify.css';
// import Routes from './routes';
const Routes = React.lazy(() => import('./routes'));

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes />
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
