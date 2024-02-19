import React from "react"
import { type FormEvent } from "react"

type NewGoalProp = {
    onAddGoal: (goal: string, summary: string) => void
}

export const NewGoal = ({ onAddGoal }: NewGoalProp) => {
    const goal = React.useRef<HTMLInputElement>(null)
    const summary = React.useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const enteredGoal = goal.current!.value
        const enteredSummanry = summary.current!.value
        e.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummanry)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add goal</button>
            </p>
        </form>
    )
}