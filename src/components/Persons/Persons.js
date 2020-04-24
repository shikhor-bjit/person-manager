import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {

    const clicked = props.clicked;
    const personList = props.persons;

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
                                clicked={() => clicked(person.id)}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default Persons;