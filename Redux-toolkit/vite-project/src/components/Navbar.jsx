import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './nav.css';

const Navbar = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home" className='navbarrr'>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/cart' eventKey="/cart">My Bag <span>0</span></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar