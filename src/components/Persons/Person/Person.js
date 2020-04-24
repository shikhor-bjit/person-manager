import React from "react";
import './Person.css'

const Person = (props) => {

    const age = props.age;
    const name = props.name;
    const clicked = props.clicked;

    return (
        <div className="Person">
            <h2 onClick={clicked}>My name is {name}</h2>
            <p>I am {age}.</p>
            <input type="text"/>
        </div>
    );
};

export default Person;