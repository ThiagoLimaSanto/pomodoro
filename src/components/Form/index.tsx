import { FaPlayCircle } from "react-icons/fa";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

import Styles from "./styles.module.css"
import { formatSecondToMinutes } from "../../utils/formatSecondToMinutes";

export function Form() {
    const { state, setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Preencha o nome da tarefa')
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            duration: state.config[nextCycleType],
            startDate: Date.now(),
            completeDate: null,
            interruptedDate: null,
            type: nextCycleType
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
                config: {
                    ...prevState.config
                }
            }
        })

    }

    return (
        <form onSubmit={handleCreateNewTask} className={Styles.form}>
            <div className={Styles.formRow}>
                <DefaultInput type="text" id="task" labelText="Task" placeholder='Digite algo...'
                    ref={taskNameInput} />
            </div>

            <div className={Styles.formRow}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={Styles.formRow}>
                <Cycles />
            </div>

            <div className={Styles.formRow}>
                <DefaultButton type="submit" icon={<FaPlayCircle />} color='green' />
            </div>
        </form>
    )
}