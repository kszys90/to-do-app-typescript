import { type FormEvent } from "react"

export const NewGoal = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Your goal</label>
                <input id="goal" type="text" />
            </p>
            <p>
                <label>Short summary</label>
                <input id="summary" type="text" />
            </p>
            <p>
                <button>Add goal</button>
            </p>
        </form>
    )
}