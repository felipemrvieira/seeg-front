import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import UserSignIn from '../pages/User/SignIn';
import Solutions from '../pages/Solution/Index';
import SolutionsEdit from '../pages/Solution/Edit';
import SolutionsNew from '../pages/Solution/New';
import SolutionsShow from '../pages/Solution/Show';
// import UserRegister from '../pages/User/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Solutions} isPrivate />
			<Route path="/solutions/" exact component={Solutions} />
			<Route path="/solutions/new" exact component={SolutionsNew} />
			<Route path="/solutions/:id" exact component={SolutionsShow} />
			<Route path="/solutions/:id/edit" exact component={SolutionsEdit} />
			<Route path="/user/signin" component={UserSignIn} />
			{/* <Route path="/user/register" component={UserRegister} isPrivate /> */}
		</Switch>
	);
}
