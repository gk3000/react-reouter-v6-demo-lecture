import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Navbar from './Navbar'
import Footer from './Footer'
import SingleProduct from './SingleProduct'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class App extends React.Component{

  state = {
    isLoggedIn:true
  }

  // renderPages=(page)=>{
  //   this.setState({page}, ()=>{console.log(this.state)})
  // }

  render(){
    return(
      <div className='App'>
      <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' render = { (props)=> <About year={2020} {...props} />} />
      <Route exact path='/contact' render ={ props=>(!this.state.isLoggedIn ? 
        <Redirect to='/'/> : <Contacts { ...props }/> )} />
      <Route exact path='/singleproduct/:product' component={SingleProduct} />
      </Router>

{/*      <Navbar selectPage={this.renderPages}/>

      {this.state.page === 'Home' ? 
      <Home /> : this.state.page === 'About' ? 
      <About /> : this.state.page === 'Contacts' ? 
    <Contacts /> : <Home />}*/}

    <Footer />
    </div>
    )
  }
}

export default App;
