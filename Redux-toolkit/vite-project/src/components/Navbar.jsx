import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './nav.css';
import { useSelector, Provider } from 'react-redux';
import store from '../store/store';


const Navbar = () => {
    const cartProduct = useSelector(state => state.cart)
    return (
        <Provider store={store}>
            <Nav variant="pills" defaultActiveKey="/home" className='navbarrr'>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/cart' eventKey="/cart">My Bag <span>{cartProduct.length}</span></Nav.Link>
                </Nav.Item>
            </Nav>
        </Provider>
    )
}

export default Navbar