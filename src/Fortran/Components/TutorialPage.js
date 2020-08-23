import React, { useState} from "react";
import {Header} from "./Header";
import {Paragraph} from "./Paragraph";
import {Column} from "./Column";
import {Row} from "./Row";

const text_as_json = [
    {
        name: "blah",
        text: "Blah",
        id: 1
    },
    {
        name: "blah 2",
        text: "blah blah",
        id: 2
    }
    ]
const tutorial_style_box = {
    "backgroundColor": "red",
    "display": "flex",
    "flexWrap": "wrap",
    "margin": 0,
    "width": "100%",
    "white-space": "pre-wrap"
}

const TextBox = () => {
    const [value, setValue] = useState("Blah blah blah")

    var id = Math.floor(1000000*Math.random())
    id = "TextBox" + id

    const handleChange = (event) => {
        event.preventDefault()
        const changed_value = document.getElementById(id).value
        console.log("changed value")
        setValue(changed_value)
    }
    const input_area_style = {...tutorial_style_box, width: "50%", margin: 1, color: "white", backgroundColor: "black"}
    const text_area_style = {...tutorial_style_box, width: "50%", margin: 1}

    return (
        <React.Fragment>
            <div style={{display: "flex"}}>
            <textarea value = {value} onChange={handleChange} id={id} style={input_area_style}/>
            <div style = {text_area_style}> {value}</div>
            </div>

        </React.Fragment>
    )
}

const CodeAndResults = () => {

    return (
        <React.Fragment>
            <TextBox />
            <Row cells = {text_as_json}/>
        </React.Fragment>
    )

}


export const TutorialPage = () => {
    return (<React.Fragment>
        <Header text= "Tutorial Page"/>
        <Paragraph text={"SOME TECZ"}/>
        <Paragraph text={"SOME TECZ2"}/>
        <Paragraph text={"SOME TECZ3"}/>
        <CodeAndResults/>

    </React.Fragment>)
}