import React from 'react'
import CourseGoal from './components/CourseGoal'
import { Header } from './components/Header'
import goalsImg from './assets/goals.jpg'

type CourseGoal = {
  title: string
  description: string
  id: number
}

function App() {
  const [goals, setGoals] = React.useState<CourseGoal[]>([])
  const handleAddGoal = () => {
    const newGoal: CourseGoal = {
      title: 'string',
      description: 'string',
      id: Math.random()
    }
    setGoals((prevState) => {
      return [...prevState, newGoal]
    })
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'a list of goals' }}>
        <h1>Typescript TO-DO APP</h1>
      </ Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <ul>
        {goals.map((goal) =>
        (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main >
  )
}

export default App
