import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg='light' variant='light' sticky='bottom'>
      <Navbar.Brand style={{ paddingLeft: "30px" }}>
        {" "}
        Developed by Geekster and Team!{" "}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
