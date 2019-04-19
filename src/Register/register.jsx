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
            formValid: true,
            errors: {
                name: null,
                username: null,
                password: null,
                email: null
            }
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

        const form = this.state.form
        const validate = this.validate(form)

        if (!validate.valid) {
            this.setState(state => ({
                ...state,
                errors: validate.errorMessages
            }))
        }else{

            //SUBMIT TO STORE REDUX

            this.setState(state => ({
                ...state,
                errors: validate.errorMessages,
                formValid: validate.valid
            }))
        }

        console.log(validate)
    }

    validate(data){

        const email = validation.email('email', data.email)
        const fullName = validation.required('name', data.name)
        const username = validation.required('username', data.username)
        const password = validation.password('password', data.password)
        

        const valid = email || fullName || username || password ? false : true;

        const errorMessages = {
            email: email,
            name: fullName,
            username: username,
            password: password
        }

        return {
            errorMessages,
            valid
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
                            <div className={'form-field ' + (this.state.errors.name ? 'error-field' : '')}>
                                <input type="text" placeholder='Full Name' onChange={this.handleChange} name='name'/>
                                <div className="error-message">{this.state.errors.name}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.email ? 'error-field' : '')}>
                                <input type="text" placeholder='Email' onChange={this.handleChange} name='email'/>
                                <div className="error-message">{this.state.errors.email}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.username ? 'error-field' : '')}>
                                <input type="text" placeholder='Username' onChange={this.handleChange} name='username' />
                                <div className="error-message">{this.state.errors.username}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.password ? 'error-field' : '')}>
                                <input type="password" placeholder='Password' onChange={this.handleChange} name='password'/>
                                <div className="error-message">{this.state.errors.password}</div>
                            </div>
                            
                            <button className="button fluid register" onClick={this.handleSubmit} >Register</button>
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