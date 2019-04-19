import React from 'react'
class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.routeToRegister = this.routeToRegister.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    routeToRegister() {
        this.props.history.push('/register')
    }
    
    render(){

        const isEnabled = this.state.username.length > 0 && this.state.password.length > 0

        return (
            <div id="login">
                <div className='panel'>
                    <div className="panel-header">
                        <h1>Member Login</h1>
                    </div>
                    <div className="panel-body">
                        <form className='form'>
                            <div className='form-field'>
                                <input type="text" placeholder='Username' onChange={this.handleChange} name='username' />
                            </div>
                            <div className='form-field'>
                                <input type="password" placeholder='Password' onChange={this.handleChange} name='password'/>
                            </div>
                            <button className="button fluid login" disabled={!isEnabled}>Log In</button>
                        </form>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-body text-center">
                        <span>Don't have an account?</span> <span className='link' onClick={this.routeToRegister}>Register</span>
                    </div>
                </div>
            </div>
        )
    }
}

export {Login};