import React from 'react'
import ReactDOM from 'react-dom';
import { validation } from '../_helpers'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            form: {
                name: '',
                username: '',
                password: '',
                email: ''
            },
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.routeToLogin = this.routeToLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    routeToLogin(){
        this.props.history.push('/login')
    }

    handleChange(e){
        const { name, value } = e.target
        this.setState( state => ({
            ...state,
            form: {
                ...state.form,
                [name]: value
            }
        }));
    }

    handleSubmit(e){
        e.preventDefault()

        var errors = []

        const form = this.state.form

        for (var key in form) {
            const validate = this.validate(key, form[key])
            if (validate) errors.push(validate)
        }

        console.log(errors)
        console.log(this.state.form)
    }

    validate(name, value){

        switch(name) {
            case 'email':
                const email = validation.required(name, value)
                return email ? { name: name, message: email } : null
            case 'name':
                const fullName = validation.required(name, value)
                return fullName ? { name: name, message: fullName } : null
            case 'username':
                const username = validation.required(name, value)
                return username ? { name: name, message: username } : null
            case 'password':
                const password = validation.required(name, value)
                return password ? { name: name, message: password} : null
            default:
                return null
        }
    }

    render(){
        return(
            <div id="register">
                <div className='panel'>
                    <div className="panel-header">
                        <h1>Register</h1>
                    </div>
                    <div className="panel-body">
                        <form className='form'>
                            <div className='form-field'>
                                <input type="text" placeholder='Full Name' onChange={this.handleChange} name='name'/>
                            </div>
                            <div className='form-field'>
                                <input type="text" placeholder='Email' onChange={this.handleChange} name='email'/>
                            </div>
                            <div className='form-field'>
                                <input type="text" placeholder='Username' onChange={this.handleChange} name='username' />
                            </div>
                            <div className='form-field'>
                                <input type="password" placeholder='Password' onChange={this.handleChange} name='password'/>
                            </div>
                            
                            <button className="button fluid large teal" onClick={this.handleSubmit} >Register</button>
                        </form>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-body text-center">
                        <span>Have an account?</span> <span className='link' onClick={this.routeToLogin}>Login</span>
                    </div>
                </div>
            </div>
        )
    }
}


export { Register }