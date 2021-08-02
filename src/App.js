import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<BrowserRouter>
				<ToastContainer />
				<Routes />
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
