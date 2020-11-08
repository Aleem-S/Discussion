import React from 'react';

import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import Header from './components/Header/Header'
import {auth} from './firebase/firebase.util'
class App extends React.Component {
  constructor(){
    super();
    this.state = {currentUser:null}
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <BrowserRouter>
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
               </Switch>
               </BrowserRouter>
    </div>
    
  );
}
}

export default App;
