import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import Error from './components/Error'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const deletePersonEntry = id => {
    const person = persons.find(p => p.id === id)
  
    personsService
    .deletePerson(id)
    .then(returnedPerson => {
      setPersons(persons.filter(person => person.id !== id))
      setNotificationMessage(
        `${person.name} was successfully deleted`
      )
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    })
    .catch(error => {
      setErrorMessage(
        `${person.name} was already deleted from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const namesArray = persons.map((person) => person.name);

    if (namesArray.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber}

        personsService
        .update(changedPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson ))
          setNotificationMessage(
            `${returnedPerson.name} was successfully updated`
          )
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(
            `${person.name} was already deleted from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== changedPerson.id))
        })
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }

      personsService.create(nameObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')

        setNotificationMessage(
          `${newPerson.name} was successfully added`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
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
      <Error message={errorMessage} />
      <Notification message={notificationMessage} />
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} deleteEntry={deletePersonEntry} />
    </div>
  )
}

export default App