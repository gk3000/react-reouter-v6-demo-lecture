import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './views/Home.js'
import About from './views/About.js'
import Contacts from './views/Contacts.js'
import Data from './views/Data.js'
import SingleProduct from './views/SingleProduct.js'

import Navbar from './components/Navbar'

function App() {
  let someFunc=(e,data)=>{
    alert(data)
  }
  return (
    <div className="App">
    <header>I am header</header>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About username={'Jack'} hello={someFunc}/> } />
        <Route path='/contacts' element={ <Contacts/> } />
        <Route path='/singleproduct/:product' element={ <SingleProduct/> } />
        <Route path='/data/:somedata' element={ <Data/> } />
      </Routes>
    </Router>
    <footer>I am footer</footer>
    </div>
    );
}

export default App;
