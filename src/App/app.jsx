import React from 'react'
import { Switch, Router, Route} from 'react-router-dom'
import { Login } from '../Auth'
import { Register } from '../Register'
import { history } from '../_helpers'

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/login' exact={true} component={Login} />
				<Route path='/register' exact={true} component={Register} />
			</Switch>
		</Router>
	);
}

export default App;