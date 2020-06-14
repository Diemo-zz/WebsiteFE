import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Secondpage} from "./SecondPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactPage} from "./ContactPage";
import {About} from "./About";
import './Navbar.css'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {FortranPage} from "../Fortran/FortranPage";



export const Navigation = () => {
        return (
            <React.Fragment>
        <div className="nav-bar">
          <Navbar className="nav-link">
            <Navbar.Brand as={Link} to="/" className="brand">Home</Navbar.Brand>
              <NavbarCollapse>
                  <Nav as={Link} to="/secondpage" className="link">SecondPage</Nav>
                  <Nav as={Link} to="/fortran/home" className="link">Fortran Tutorial</Nav>
                  <Nav as={Link} to="/contact" className="link">Contact</Nav>
                  <Nav as={Link} to="/about" className="link">About</Nav>
              </NavbarCollapse>
          </Navbar>
        </div>
        <div className="nav-view">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/secondpage' component={Secondpage}/>
            <Route exact path='/contact' component={ContactPage}/>
            <Route exact path='/about' component={About}/>
            <Route exact pate={'/fortran'} component={FortranPage} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
            </React.Fragment>
        )
}