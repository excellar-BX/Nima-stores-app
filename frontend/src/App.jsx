import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Signup from './screens/Signup/Signup';
import Stage1 from './components/Stage1';
import Singleproduct from './screens/Singleproduct/Singleproduct';
import NotFound from './screens/NotFound/NotFound';
import Adminformlogin from './screens/Admin/Adminformlogin';
import Adminhome from './screens/Admin/Adminhome';
import Adminformsignup from './screens/Admin/Adminformsignup';
import Cart from './screens/Cart/Cart';
import Wishlist from './screens/Wishlist/Wishlist';
import Toast from './screens/Toast/Toast';
function App() {
  return (
    <div  className="App ">

      <Router> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Stage1/>}/>
          <Route path='/cart/:id?' element={<Cart/>}/>
          <Route path='/toast' element={<Toast/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/admin/login' element={<Adminformlogin/>} />
          <Route path='/admin/signup' element={<Adminformsignup/>} />
          <Route path='/admin/home/*' element={<Adminhome/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/products/:id' element={<Singleproduct/>} />
          <Route path='*' element={<NotFound/>}/>
          
          
          
        </Routes>
      </Router>

    </div>
  )
}

export default App;
