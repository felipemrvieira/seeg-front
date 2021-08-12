import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import UserSignIn from '../pages/Admin/User/SignIn';
import Solutions from '../pages/Admin/Solution/Index';
import SolutionsEdit from '../pages/Admin/Solution/Edit';
import SolutionsNew from '../pages/Admin/Solution/New';
import SolutionsShow from '../pages/Admin/Solution/Show';
// import UserRegister from '../pages/User/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			<Route path="/admin/solutions/" exact component={Solutions} isPrivate />
			<Route
				path="/admin/solutions/new"
				exact
				component={SolutionsNew}
				isPrivate
			/>
			<Route
				path="/admin/solutions/:id"
				exact
				component={SolutionsShow}
				isPrivate
			/>
			<Route
				path="/admin/solutions/:id/edit"
				exact
				component={SolutionsEdit}
				isPrivate
			/>
			<Route path="/user/signin" component={UserSignIn} />
			{/* <Route path="/user/register" component={UserRegister} isPrivate /> */}
		</Switch>
	);
}
