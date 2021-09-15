import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './components/header/header.componet';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,getData} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector';
import './App.css';



class App extends React.Component {



  unsubscribeFromAuth = null

  componentDidMount(){

   const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
    
    if(user){

    const userRef = await getData(user)

    const {displayName,email,uid} = userRef

    setCurrentUser({
      currentUser:{
      displayName,
      email,
      uid
      }
    })

    console.log(this.state)
    }else{
      setCurrentUser(user) 
    }
    //console.log(user.uid)   
  });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
             exact 
             path='/signin' 
             render = {()=> 
            this.props.currentUser ? (
             <Redirect to='/' />
            ) : (
            <SignInSignUpPage />
            )} 
            />
       <Homepage />
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
