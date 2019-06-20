import React from "react";
import {connect} from 'react-redux';


class Home extends React.Component{
    

    componentWillMount(){
        if(this.props.authenticated){
           
         this.props.history('/login')
        }
    }
    
    render(){
        return <div>
           <h2>Welcome to the homePage of BlueBox</h2>
        </div>
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.setUserReducer.authenticated
});

export default connect(mapStateToProps)(Home);
