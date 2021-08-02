import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import UserSignIn from '../pages/User/SignIn';
import Solution from '../pages/Solution';
import UserRegister from '../pages/User/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Solution} />
			<Route path="/user/signin" component={UserSignIn} />
			<Route path="/user/register" component={UserRegister} isPrivate />
		</Switch>
	);
}
