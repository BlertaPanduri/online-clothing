import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop.js";
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, createUserProfileDocument} from '../src/components/firebase/firebase.utils.js';
import {setCurrentUser} from './redux/user/user.actions';

 class App extends React.Component{
   
   unsubscribeFromAuth = null;
  /** Nese je authenticated mu kriju ne databaze ni dokument qe e permban perdoruesin dhe
   *  nese s'je authenticated me bo unsubscribe */
   componentDidMount(){
    const {setCurrentUser} = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
       if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      console.log('userRef'+userRef);

      userRef.onSnapshot(snapshot => {
        this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          
        })
      })
       }
      setCurrentUser(userAuth)
     })
   
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth()
   }


  render(){
  return (
    <div>
      <Header/>
      <Switch>
     <Route exact path='/' component={Homepage} />
     <Route path='/shop' component={ShopPage}/>
     <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
     <Route exact path='/checkout' component={CheckoutPage} />
     </Switch>
    </div>
  );
 }

}

/** redux
 * mapStateToProps - e marrim vetine e state-it qe na nevojitet
 * mapDispatchToProps  - i marrim metodat qe na nevojiten
 */
const mapStateToProps = ({user}) => ({
currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
 setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
