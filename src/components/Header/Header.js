import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { BiLogInCircle, BiShoppingBag, BiBasket, BiHomeHeart } from 'react-icons/bi'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>project1-react</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <LinkContainer to='/'>
                            <Nav.Link>
                                <BiHomeHeart className='mx-1' />Home
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/shopping'>
                            <Nav.Link>
                                <BiShoppingBag className='mx-1' />Shopping
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/basket'>
                            <Nav.Link>
                                <BiBasket className='mx-1' />Basket
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                            <Nav.Link>
                                <BiLogInCircle className='mx-1' />Login
                            </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header