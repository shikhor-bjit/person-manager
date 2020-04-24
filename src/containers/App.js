import React from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {
    state = {
        persons: [
            {id: 1, name: 'roy', age: 25},
            {id: 2, name: 'linda', age: 20},
            {id: 3, name: 'ahmed', age: 21},
            {id: 4, name: 'dipta', age: 18},
            {id: 5, name: 'shruti', age: 10}
        ],
        toggleValue: false
    };

    togglePersons = () => {
        const doesToggle = this.state.toggleValue;
        this.setState({toggleValue: !doesToggle});
    }

    deletePerson = (personIndex) => {
        console.log('personIndex:', personIndex, 'clicked!');

        const personList = [...this.state.persons];
        const personListIndex = personList.findIndex(p => p.id === personIndex);

        personList.splice(personListIndex, 1);
        this.setState({persons: personList});
    }

    updateName = (event, personIndex) => {
        const personList = [...this.state.persons];
        const person = personList.find(p => p.id === personIndex);
        person.name = event.target.value;

        this.setState({persons: personList});
    }

    render = () => (
        <div className="App">
            <h1> {this.props.title} </h1>
            <Cockpit
                toggleValue={this.state.toggleValue}
                toggle={this.togglePersons}/>
            {this.preparePersonList()}
        </div>
    )

    preparePersonList = () => {
        let personList = null;
        if (this.state.toggleValue) {
            personList = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePerson}
                    updatePerson={this.updateName}/>
            );
        }
        return personList;
    }
}

export default App;
