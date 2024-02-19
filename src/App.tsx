import React from 'react'
import { Header } from './components/Header'
import goalsImg from './assets/goals.jpg'
import { CourseGoalList } from './components/CourseGoalList'
import { NewGoal } from './components/NewGoal'

export type CourseGoal = {
  title: string
  description: string
  id: number
}

function App() {
  const [goals, setGoals] = React.useState<CourseGoal[]>([])
  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      title: goal,
      description: summary,
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goalsList={goals} handleDeleteGoal={handleDeleteGoal} />
    </main >
  )
}

export default App
