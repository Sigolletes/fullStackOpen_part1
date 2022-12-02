import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Title = (props) => (
  <div>
    <h1>GIVE FEEDBACK</h1>
  </div>
)

const StatisticLine = ({ text, value }) => {
  return (
    <h4>{text} {value}</h4>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  if (all > 0) {
    return (
      <div>
        <h1>STATISTICS</h1>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={(good - bad) / (all)} />
        <StatisticLine text="Positive" value={(good) * 100 / (all)} />
      </div>
    )
  } 
  return (
    <div>
      <h1>STATISTICS</h1>
      <h4>No feedback given</h4>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </div>
  )
}

export default App
