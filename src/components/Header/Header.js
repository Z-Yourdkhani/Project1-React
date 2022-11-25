import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { BiLogInCircle, BiShoppingBag , BiBasket , BiHomeHeart} from 'react-icons/bi'
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand href="/">project1-react</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <Nav.Link href="/">
                                <BiHomeHeart className='mx-1'/>Home
                            </Nav.Link>
                            <Nav.Link href="/shopping">
                                <BiShoppingBag className='mx-1'/>Shopping
                            </Nav.Link>
                            <Nav.Link href="/basket">
                                <BiBasket className='mx-1'/>Basket
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <BiLogInCircle className='mx-1'/>Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header