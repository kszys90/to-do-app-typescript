import CourseGoal from "./CourseGoal"
import { type CourseGoal as CourseGoalType } from "../App"

type CourseGoalListProps = {
    goalsList: CourseGoalType[],
}

export const CourseGoalList = ({ goalsList }: CourseGoalListProps) => {
    return (
        <ul>
            {goalsList.map((goal) =>
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
    )
}