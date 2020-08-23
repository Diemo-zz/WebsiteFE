import React from "react";
import './FortranNavBar.css'
import './FortranPage.css'
import {Nav, Navbar} from "react-bootstrap";
import {Link, Route, Switch} from 'react-router-dom';
import {FortranHome} from "./Components/HomePage";
import {InstallingFortran} from "./Components/InstallingFortran";
import {TutorialPage} from "./Components/TutorialPage";


const InterrnalFortranNavigation = () => {
    return (
        <div>
        <Navbar className={"fortran-nav-bar"}>
            <Nav as={Link} to={"/fortran/home"} className={"fortran-link"}>Home</Nav>
            <Nav as={Link} to={"/fortran/install"} className={"fortran-link"}>Installing Fortran</Nav>
            <Nav as={Link} to={"/fortran/tutorial"} className={"fortran-link"}>Fortran Tutorial</Nav>
        </Navbar>
        <Switch>
            <Route exact path={"/fortran/home"} component={FortranHome} />
            <Route exact path={"/fortran/install"} component={InstallingFortran} />
            <Route exact path={"/fortran/tutorial"} component={TutorialPage} />
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