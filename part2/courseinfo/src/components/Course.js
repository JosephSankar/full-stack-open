import React from 'react'

const Course = ({ course }) => (
    <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

const Header = ({courseName}) =>
    <h2>{courseName}</h2>

const Total = ({parts}) => {
    const total = parts.reduce((runningTotal, currentPart) => (runningTotal + currentPart.exercises), 0);

    return <p><b>Number of exercises {total}</b></p>
}


const Part = ({part}) =>
    <p>{part.name} {part.exercises}</p>

const Content = (props) => {
    const parts = () => {
        return props.parts.map(part =>
            <Part key={part.id} part={part} />
        )
    }

    return (
        <div>
            {parts()}
        </div>
    )
}

export default Course