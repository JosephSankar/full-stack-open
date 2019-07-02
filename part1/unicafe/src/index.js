import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const goodWeight = 1;
const neutralWeight = 0;
const badWeight = -1;

const Button = (props) => (
    <button onClick={props.handleClick} >
        {props.text}
    </button>
)

const Statistic = (props) => (
    <div>
        {props.text} {props.value}
    </div>
)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

    let total = good + neutral + bad;
    let average = ((good * goodWeight) + (neutral * neutralWeight) + (bad * badWeight)) / total;
    let positivePercentage = good / total * 100 + "%";

    if (total > 0) {
        return (
            <div>
                <h1>give feedback</h1>
                <Button handleClick={handleGoodClick} text="good" />
                <Button handleClick={handleNeutralClick} text="neutral" />
                <Button handleClick={handleBadClick} text="bad" />

                <h1>statistics</h1>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={total} />
                <Statistic text="average" value={total > 0 ? average : "N/A"} />
                <Statistic text="positive" value ={total > 0 ? positivePercentage : "N/A"} />
            </div>
        )
    } else {
        return (
            <div>
                <h1>give feedback</h1>
                <Button handleClick={handleGoodClick} text="good" />
                <Button handleClick={handleNeutralClick} text="neutral" />
                <Button handleClick={handleBadClick} text="bad" />

                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root')
)