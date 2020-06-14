import React from "react";
import './FortranStyles.css'

export const Header = ({text}) => {
    const className = "header"
    return (
        <>
            <h1 class={className}>{text}</h1>
        </>
    )
}