import React from "react";
import './Cockpit.css'

const Cockpit = (props) => {
    const toggle = props.toggle;

    return (
        <div className="Cockpit">
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default Cockpit;