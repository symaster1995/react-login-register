import React from 'react'
import { Switch, Router, Route} from 'react-router-dom'
import { Login } from '../Auth'
import { history } from '../_helpers/history'

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/login' exact={true} component={Login} />
			</Switch>
		</Router>
	);
}

export default App;