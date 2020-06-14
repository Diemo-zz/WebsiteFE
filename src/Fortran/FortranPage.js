import React from "react";
import './FortranPage.css'
import {Nav, Navbar} from "react-bootstrap";
import {Link, Route, Switch} from 'react-router-dom';
import {FortranHome} from "./Components/HomePage";
import {InstallingFortran} from "./Components/InstallingFortran";


const InterrnalFortranNavigation = () => {
    return (
        <div>
        <Navbar className={"fortran-nav-bar"}>
            <Nav as={Link} to={"/fortran/home"} className={"fortran-brand"}>Home</Nav>
            <Nav as={Link} to={"/fortran/install"} className={"fortran-brand"}>Installing Fortran</Nav>
        </Navbar>
        <Switch>
            <Route exact path={"/fortran/home"} component={FortranHome} />
            <Route exact path={"/fortran/install"} component={InstallingFortran} />
        </Switch>
        </div>

    )
}

export const FortranPage = () => {
    return (
        <React.Fragment>
            <InterrnalFortranNavigation />
        </React.Fragment>
    )
}