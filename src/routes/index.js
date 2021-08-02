import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import UserSignIn from '../pages/User/SignIn';
import UserRegister from '../pages/User/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={UserSignIn} isPrivate />
			<Route path="/user/signin" component={UserSignIn} />
			<Route path="/user/register" component={UserRegister} isPrivate />
		</Switch>
	);
}
