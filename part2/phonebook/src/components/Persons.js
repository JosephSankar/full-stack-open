import React from 'react'

const deletePersonEntry = (person, deleteEntry) => {
    if (window.confirm(`Delete ${person.name}?`)) {
        deleteEntry(person.id)
    }
}

const Persons = ({persons, nameFilter, deleteEntry}) => (
    persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase())).map((person) => (<div key={person.name}>
        {person.name} {person.number} <button onClick={() => deletePersonEntry(person, deleteEntry)}> delete </button>
    </div>))
    
)

export default Persons