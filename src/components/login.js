import React from 'react';
import './register-login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestUser} from '../actions/loginActions';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email:'',
            password:''
           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const user =  {
            email: this.state.email,
            password: this.state.password
        };
        

        this.props.requestUser(user, this.props.history);
    }

    render(){
        
        const {error} = this.props;
        const invalidmail = (error.email !=null)? "invalid" : "";
        const invalidpass = (error.password)? "invalid" : "";

        return(<div className="container form ">

            <div className="form-container">
                <h2 className="form-label text-center">Sign in to your account </h2>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="for-group">
                        <label for='email'>Email </label>
                        <input type="email" className={"form-control "+invalidmail} placeholder="your email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    
                    <small className="error">{error.email}</small>
                    
                    <div className="for-group">
                        <label for='password'>Password</label>
                        <input type="password" className={"form-control "+invalidpass} placeholder="your password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <small className="error">{error.password}</small>

                   

                    <button className="btn " type="submit">Sign in </button>
                    <small id="sign-in" >New here? <Link to="/register" className="red">Sign up</Link></small>

                </form>

            </div>   
            
        </div>)
    }
}

const mapStateToProps = (state) => ({
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    authenticated: state.loginReducer.authenticated,
    
    
});

const mapDispatchToProps = {
    requestUser
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);