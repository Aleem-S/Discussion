import React from 'react';

import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './Pages/Home'
import SignInAndSignUp from './components/Login/SignInSignUp'
import Header from './components/Header/Header'
import {auth, createUserProfileDocument} from './firebase/firebase.util'

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentUser:null}
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()

          }
        });
      });
    }
      this.setState({ currentUser: userAuth });
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
        <Route path='/login' component={SignInAndSignUp}/>
               </Switch>
               </BrowserRouter>
    </div>
    
  );
}
}

export default App;
