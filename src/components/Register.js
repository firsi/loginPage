import React from 'react';
import './register-login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {sendUser} from '../actions/registerActions';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            name:'',
            email:'',
            password:'',
            password_confirm:'',
            errors:{}
            
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
        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirm:this.state.password_confirm

        }
        const history=[];
        this.props.sendUser(user, history);
    }

    

    render(){
        
        return(<div className="container form ">

            <div className="form-container">
                <h2 className="form-label text-center">Create your account now</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        
                        <label for='name'>Full Name</label>
                        <input type="text" className="form-control" placeholder="your full name" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    
                    <div className="for-group">
                        <label for='email'>Email</label>
                        <input type="email" className="form-control" placeholder="your email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="for-group">
                        <label for='password'>Password</label>
                        <input type="password" className="form-control" placeholder="your password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="for-group">
                        <label for='password-confirm'>Confirm your password</label>
                        <input type="password" className="form-control" placeholder="Confirm your password" name="password_confirm" id="password_confirm" value={this.state.password_confirm} onChange={this.handleChange} />
                    </div>

                    <button className="btn " type="submit">GET STARTED FOR FREE </button>
                    <small id="sign-in" >Already have an account? <Link to="/login" className="red">Sign in</Link></small>

                </form>

            </div>   
            
        </div>)
    }
}

const mapStateToProps = state => ({
    error: state.registerReducer.error
})

const mapDispatchToProps = {
    sendUser
}

export default connect (mapStateToProps, mapDispatchToProps)(Register);