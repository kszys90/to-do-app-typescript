import React from 'react'
import { Header } from './components/Header'
import goalsImg from './assets/goals.jpg'
import { CourseGoalList } from './components/CourseGoalList'

export type CourseGoal = {
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
  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => {
      const filteredGoals = prevGoals.filter((goal: CourseGoal) => goal.id !== id)
      return filteredGoals
    })
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'a list of goals' }}>
        <h1>Typescript TO-DO APP</h1>
      </ Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoalList goalsList={goals} handleDeleteGoal={handleDeleteGoal} />
    </main >
  )
}

export default App
