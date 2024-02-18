import CourseGoal from "./CourseGoal"
import { type CourseGoal as CourseGoalType } from "../App"

type CourseGoalListProps = {
    goalsList: CourseGoalType[],
    handleDeleteGoal: (id: number) => void
}

export const CourseGoalList = ({ goalsList, handleDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goalsList.map((goal) =>
            (
                <li key={goal.id}>
                    <CourseGoal
                        title={goal.title}
                        handleDeleteGoal={handleDeleteGoal}
                        id={goal.id}
                    >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}