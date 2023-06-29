import './App.css'
import Dashboard from './components/Dashboard';
import Cart from './components/Card';
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pami from './components/Pami';
import { Provider } from 'react-redux';
import store from '../src/store/store';



function App () {


  return (
    <>
      <Provider store={store}>
        <Navbar />
        {/* <Pami /> */}
        <Router>
          <Routes>
            <Route index path='/' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App

