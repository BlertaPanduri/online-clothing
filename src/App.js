import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop.js";
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, createUserProfileDocument} from '../src/components/firebase/firebase.utils.js';

 class App extends React.Component{
   constructor(){
     super();
     this.state = {
       currentUser: null
     }
   }


   unsubscribeFromAuth = null;

   componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
       if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      console.log('userRef'+userRef);

      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        })
      })
       }
      //  console.log(user);
      this.setState({currentUser: userAuth});
     })
   
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth()
   }


  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={ShopPage}/>
     <Route path='/signin' component={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
 }

}

export default App;
