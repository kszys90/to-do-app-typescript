import CourseGoal from "./CourseGoal"
import { type CourseGoal as CourseGoalType } from "../App"
import { InfoBox } from "./InfoBox"
import { ReactNode } from "react"

type CourseGoalListProps = {
    goalsList: CourseGoalType[],
    handleDeleteGoal: (id: number) => void
}

export const CourseGoalList = ({ goalsList, handleDeleteGoal }: CourseGoalListProps) => {
    if (goalsList.length === 0) {
        return <InfoBox mode={'hint'}>
            You have no course goals yet. Start adding some!
        </InfoBox>
    }
    let warningBox: ReactNode
    if (goalsList.length >= 4) {
        warningBox = (
            <InfoBox mode='warning' severity="low">
                {'You\'re colecting a lot of goals. Dont\'t put too much on your plate!'}
            </InfoBox>
        )

    }
    return (
        <>
            {warningBox}
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
        </>
    )
}