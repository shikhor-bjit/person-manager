import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {

    const clicked = props.clicked;
    const personList = props.persons;
    const updatePerson = props.updatePerson;

    return (
        <div className="Persons">
            {
                personList.map(
                    person => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                clicked={() => clicked(person.id)}
                                updatePerson={event => updatePerson(event, person.id)}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default Persons;