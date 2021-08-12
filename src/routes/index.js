import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import MunicipalSolutions from '../pages/MunicipalSolutions';
import UserSignIn from '../pages/User/SignIn';
import Solutions from '../pages/Solution/Index';
import SolutionsEdit from '../pages/Solution/Edit';
import SolutionsNew from '../pages/Solution/New';
import SolutionsShow from '../pages/Solution/Show';
// import UserRegister from '../pages/User/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={MunicipalSolutions} />
			<Route path="/municipalsolutions" exact component={MunicipalSolutions} />
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
