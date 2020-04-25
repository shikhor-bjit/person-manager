import './Cockpit.css';
import React from "react";
import style from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggle = props.toggle;
    const toggleValue = props.toggleValue;

    const buttonClasses = [style.Button];
    if (toggleValue) buttonClasses.push(style.Clicked);
    else buttonClasses.push(style.NotClicked);

    return (
        <div className="Cockpit">
            <button onClick={toggle} className={buttonClasses.join(' ')}>Toggle</button>
        </div>
    );
}

export default Cockpit;