import React,{Suspense} from 'react'
import { BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
const Collection=React.lazy(()=>import("./pages/Collection"))
// import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './component/Navbar'
import ShopContextProvider from './context/ShopContext'
import Fotter from './component/Fotter'
import Hom from './pages/Hom'
import SearchBar from './component/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/Order'
const App = () => {
  return (
    <div>
      <Router>
        <ShopContextProvider>
        <ToastContainer />
        <Navbar/>
        <SearchBar/>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hom/>}/>
       
          <Route path='/collection' element={<Collection/>}/>
        
          
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/SignUP' element={<Register/>}/>
          
          <Route path='/order' element={<Order/>}/>
          
        </Routes>
        </Suspense>
        <Fotter/>
        </ShopContextProvider>
      </Router>
    </div>
  )
}

export default App