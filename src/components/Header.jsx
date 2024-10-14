import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand='lg' bg='light' variant='light'>
      <Container className='custom-container' fluid>
        <LinkContainer to='/' style={{ marginRight: "0" }}>
          <Navbar.Brand style={{ paddingLeft: "30px" }}>
            GeekGallery
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end'
          style={{ marginRight: "10px" }}
        >
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
