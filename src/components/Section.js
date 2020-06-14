import React from "react";
import {Paragraph} from "../Fortran/Components/Paragraph";
import './Section.css'
import {map} from "react-bootstrap/cjs/ElementChildren";

export const Section = ({paragraphs}) => {
    return (
        <div className="section">
            {paragraphs.map(paragraph => <Paragraph text={paragraph.text} key={paragraph.key}/>)}
        </div>
    )
}