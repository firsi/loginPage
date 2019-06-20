import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/login';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import {setUser} from './actions/setUserActions';


if(localStorage.jwt){
  const decoded_token = jwt_decode(localStorage.jwt);
  store.dispatch(setUser(decoded_token));
}

function App() {
  return (
    <div className="App">
     <Provider store={store}>   
       <Router>
         <Navbar />
         <Route exact path='/register' component={Register} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/' component={Home} />
       </Router>
    </Provider>
      
    </div>
  );
}

export default App;
