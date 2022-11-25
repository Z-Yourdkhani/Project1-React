import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'
const Footer = () => {
  return (
    <footer className='bg-light pt-4 pb-2'>
      <Container>
        <Row>
          <Col xs={4} lg={2}>
            <ul className='list-unstyled'>
              <li><BiChevronRight className='mx-1' />Home</li>
              <li><BiChevronRight className='mx-1' />About</li>
              <li><BiChevronRight className='mx-1' />FAQs</li>
            </ul>
          </Col>
          <Col xs={4} lg={2}>
            <ul className='list-unstyled'>
              <li><BiChevronRight className='mx-1' />Contact</li>
              <li><BiChevronRight className='mx-1' />Shop</li>
              <li><BiChevronRight className='mx-1' />Blog</li>
            </ul>
          </Col>
          <Col xs={4} lg={2}>
            <ul className='list-unstyled'>
              <li><BiChevronRight className='mx-1' />Support</li>
              <li><BiChevronRight className='mx-1' />Events</li>
              <li><BiChevronRight className='mx-1' />Personal</li>
            </ul>
          </Col>
          <hr className='d-block d-lg-none' />
          <Col lg={6}>
            <Form.Label className='text-uppercase'>subscribe to our newsletter</Form.Label>
            <Form.Text className='d-block mb-2'>
              Get Important Offers and Deals directly to your Email Inbox.
            </Form.Text>
            <Row>
              <Col xs={12} sm={8}>
                <Form.Control type="email" placeholder='Enter Your Email' />
              </Col>
              <Col className='d-grid mt-2 mt-sm-0'>
                <Button variant="dark">Subscribe</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <div className='text-center pb-3 text-muted'>
          Copy Rights &copy; 2022 Z-Yourdkhani
        </div>
      </Container>
    </footer>
  )
}

export default Footer