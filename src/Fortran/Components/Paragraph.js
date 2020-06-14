import React from "react";
import './FortranStyles.css'

export const Paragraph = ({text}) => {
    const className = "paragraph";
    return (<p className={className}>
        {text}
    </p>)
}