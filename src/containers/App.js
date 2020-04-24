import React from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> {this.props.title} </h1>
                <Cockpit></Cockpit>
                <Persons></Persons>
            </div>
        );
    }
}

export default App;
