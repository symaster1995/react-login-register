import React from 'react'
import { connect } from 'react-redux'
import { validation } from '../_helpers'
import { userActions } from '../User'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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

    routeToLogin() {
        this.props.history.push('/login')
    }

    clearForm() {
        this.setState(
            {
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
        )
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState(state => ({
            ...state,
            form: {
                ...state.form,
                [name]: value
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault()

        const form = this.state.form

        // this.props.dispatch(userActions.createUser(form))

        const validate = this.validate(form)

        if (!validate.valid) {
            this.setState(state => ({
                ...state,
                errors: validate.errorMessages
            }))
        } else {

            this.setState(state => ({
                ...state,
                errors: validate.errorMessages,
                formValid: validate.valid
            }))

            this.props.dispatch(userActions.createUser(form))
            this.clearForm()
        }
    }

    validate(data) {

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

    render() {

        const { alert } = this.props

        const alertContainer = alert.message ? <div className={alert.type + ' alert'}>{alert.message}</div> : ''

        return (
            <div id="register">
                <div className='panel'>
                    <div className="panel-header">
                        <h1>Register</h1>
                    </div>
                    <div className="panel-body">
                        <form className='form'>
                            <div className={'form-field ' + (this.state.errors.name ? 'error-field' : '')}>
                                <input type="text" placeholder='Full Name' onChange={this.handleChange} name='name' value={this.state.form.name} />
                                <div className="error-message">{this.state.errors.name}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.email ? 'error-field' : '')}>
                                <input type="text" placeholder='Email' onChange={this.handleChange} name='email' value={this.state.form.email} />
                                <div className="error-message">{this.state.errors.email}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.username ? 'error-field' : '')}>
                                <input type="text" placeholder='Username' onChange={this.handleChange} name='username' value={this.state.form.username} />
                                <div className="error-message">{this.state.errors.username}</div>
                            </div>
                            <div className={'form-field ' + (this.state.errors.password ? 'error-field' : '')}>
                                <input type="password" placeholder='Password' onChange={this.handleChange} name='password' value={this.state.form.password} />
                                <div className="error-message">{this.state.errors.password}</div>
                            </div>

                            <button className="button fluid register" onClick={this.handleSubmit} >Register</button>
                        </form>
                        {alertContainer}
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


const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}


export const Register = connect(mapStateToProps)(RegisterPage)