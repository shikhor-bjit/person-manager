import React from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> {this.props.title} </h1>
                <Persons></Persons>
            </div>
        );
    }
}

export default App;
