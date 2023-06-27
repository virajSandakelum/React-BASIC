import './App.css'
import Dashboard from './components/Dashboard';
import Cart from './components/Card';
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';


function App () {


  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route index path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
