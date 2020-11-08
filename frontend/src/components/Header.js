import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>Shop Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/cart'>
                                <i className='fas fa-shopping-cart mr-2'></i>Cart
                            </Nav.Link>
                            <Nav.Link href='/login' className='ml-3'>
                                <i className='fas fa-user mr-2'></i>Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;