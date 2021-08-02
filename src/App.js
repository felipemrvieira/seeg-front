import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
