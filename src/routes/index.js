import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Open routes
import Home from '../pages/Home';
import Solutions from '../pages/Solutions/Index';
import SolutionsShow from '../pages/Solutions/Show';

// Admin routes
import AdminSolutions from '../pages/Admin/Solution/Index';
import AdminSolutionsEdit from '../pages/Admin/Solution/Edit';
import AdminSolutionsNew from '../pages/Admin/Solution/New';
import AdminSolutionsShow from '../pages/Admin/Solution/Show';
import AdminUserSignIn from '../pages/Admin/User/SignIn';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			<Route path="/solutions" exact component={Solutions} />
			<Route path="/solutions/:id" exact component={SolutionsShow} />
			<Route
				path="/admin/solutions/"
				exact
				component={AdminSolutions}
				isPrivate
			/>
			<Route
				path="/admin/solutions/new"
				exact
				component={AdminSolutionsNew}
				isPrivate
			/>
			<Route
				path="/admin/solutions/:id"
				exact
				component={AdminSolutionsShow}
				isPrivate
			/>
			<Route
				path="/admin/solutions/:id/edit"
				exact
				component={AdminSolutionsEdit}
				isPrivate
			/>
			<Route path="/user/signin" component={AdminUserSignIn} />
			{/* <Route path="/user/register" component={UserRegister} isPrivate /> */}
		</Switch>
	);
}
