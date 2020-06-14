import React from "react";
import './FortranStyles.css'
import {Header} from "./Header";
import {Paragraph} from "./Paragraph";


const Column = ({color, text, heading}) => {
    const className = "column"

    return(
        <div className={className}>
            <Header text={heading} />
            <Paragraph text={text}/>
        </div>
    )

}

const Row = () => {
    const className = "row"
    const heading = "Introduction to Fortran"
    const text = "Fortran is an old old language which is getting older by the day and despite how old it is it is still too young to be abandoned"
    return (
        <React.Fragment>
            <div className={className}>
                <Column text = {text} heading={heading}/>
                <Column text = "Column2" />
            </div>
        </React.Fragment>
    )
}

export const FortranHome = () => {
    return (
        <React.Fragment>
            <Row />
            <Row />
        </React.Fragment>
    )
}