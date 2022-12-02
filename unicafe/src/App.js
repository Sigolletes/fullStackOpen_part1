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

const Statistics = (props) => (
  <div>
    <h1>STATISTICS</h1>
    <h4>Good {props.good}</h4>
    <h4>Neutral {props.neutral}</h4>
    <h4>Bad {props.bad}</h4>
  </div>
)

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
