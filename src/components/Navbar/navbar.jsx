import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Button } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import { ContextLang } from '../../Context/ContextLang';

export default function NavBar() {
  const counter = useSelector((state) => state.movies.length);
  const { contextLang, setContextLang } = useContext(ContextLang);
  
  const text = {
    En: {
        Home: "Home",
        Movies: "Movies",
        Favourites: "Favourites",
        login: "Login | Register",
        Details: "Details"
    },
    Ar: {
        Home: "الرئيسية",
        Movies: "الأفلام",
        Favourites: "المفضلة",
        account: "الحساب",
        login: "تسجيل الدخول",
        Details: "التفاصيل"
    },
};
const currentText = text[contextLang] || text.En;
  
  
  return (
    <div className='mb-0'>

        <Navbar expand="lg" className="bg-black mb-5 py-0" fixed='top'>
            <Container className='position-relative'>
                <Navbar.Brand className='text-primary' as={Link} to="#home">
                  <img src={logo} alt="logo" width={150} height={70} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link className='text-secondary links' as={Link} to="/Home">
                      {currentText.Home}
                      </Nav.Link>
                      <Nav.Link className='text-secondary links' as={Link} to="/Movies">
                      {currentText.Movies}
                      </Nav.Link>
                      <Nav.Link className='text-secondary links' as={Link} to="/Favourites">
                      {currentText.Favourites} 
                      <span className='counter bg-primary text-warning rounded-circle py-1 px-2 ms-1'>
                        {counter}
                        </span>
                      </Nav.Link>
                      <Button variant="outline-primary log me-2 ms-2"  as={Link} to= "/login">
                      {currentText.login}
                      </Button>
                      <Button variant="outline-info count ms-2" 
                        onClick={() => setContextLang(contextLang === "En" ? "Ar" : "En")}>
                        {contextLang}
                      </Button>
                      
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

    </div>
  )
}
