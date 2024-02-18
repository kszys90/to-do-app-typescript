import { type ReactNode } from "react"

type CourseGoalProps = {
    id: number
    title: string
    children: ReactNode
    handleDeleteGoal: (id: number) => void
}

export default function CourseGoal({ title, children, id, handleDeleteGoal }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => handleDeleteGoal(id)}>DELETE</button>
        </article>)


}
