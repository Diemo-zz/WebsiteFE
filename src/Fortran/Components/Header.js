import React from "react";
import './FortranStyles.css'

export const Header = ({text}) => {
    const className = "header"
    return (
        <>
            <h1 className={className}>{text}</h1>
        </>
    )
}