import React from 'react'
import { Switch, Router, Route} from 'react-router-dom'
import { Login } from '../Auth'
import { Home } from '../Home'
import { Register } from '../Register'
import { history, requiredAuth, noRequiredAuth } from '../_helpers'

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/login' exact={true} component={noRequiredAuth(Login)} />
				<Route path='/register' exact={true} component={noRequiredAuth(Register)} />
				<Route path='/' exact={true} component={requiredAuth(Home)} />
			</Switch>
		</Router>
	);
}

export default App;