import React from 'react'
import { connect } from 'react-redux'
import { authActions } from '../Auth'

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        console.log(localStorage)
    }

    handleLogout(e) {
        e.preventDefault()
        this.props.dispatch(authActions.logout())
    }

    render() {
        return (
            <div>
                <div>HOME PAGE</div>
                <div><button onClick={this.handleLogout}>LOGOUT</button></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}


export const Home = connect(mapStateToProps)(HomePage)