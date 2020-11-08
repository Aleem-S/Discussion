import React, { Component } from 'react';
import {signInWithGoogle} from '../../firebase/firebase.util'
import './Login.scss'



class Login extends Component {

    state = { mode: "login" }

    showRegister = (event) => {
        this.setState({ mode: "register" });
    }
    showLogin = (event) => {
        this.setState({ mode: "login" });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:"", password:""})
    }

    handleChange = (event) =>{
        const{value, name} = event.target;
        this.setState({[name]:value})
    }
    onRegister = () => {
        alert('Register');
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.state.mode==="login"?'login_container':'classes.hide'}>
                    <div className='heading'>Login</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='data_row'>
                            <label>Email:</label>
                            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required></input>
                        </div>

                        <div className='data_row'>
                            <label>Password:</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                        </div>

                        <div className='register_row'>Not registered? <a href="javascript:void(0)" onClick={this.showRegister}>register here</a></div>
                        <div className='toolbar'>
                            <button type="submit">Submit</button>
                        <button  onClick={signInWithGoogle}>Sign in with Google</button>
                        </div>
                    </form>
                </div>
               
            
            </React.Fragment >
        );
    }
}

export default Login;