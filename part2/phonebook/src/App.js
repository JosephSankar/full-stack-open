import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const namesArray = persons.map((person) => person.name);

    if (namesArray.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App