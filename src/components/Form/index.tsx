import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

import Styles from "./styles.module.css"

export function Form() {
    const { state, dispatch } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Preencha o nome da tarefa')
            return
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

        dispatch({
            type: TaskActionTypes.START_TASK,
            payload: newTask
        })
    }

    function handleInterruptTask() {
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className={Styles.form}>
            <div className={Styles.formRow}>
                <DefaultInput type="text" id="task" labelText="Task" placeholder='Digite algo...'
                    ref={taskNameInput} disabled={!!state.activeTask} />
            </div>

            <div className={Styles.formRow}>
                <Tips />
            </div>

            {state.currentCycle > 0 && <div className={Styles.formRow}>
                <Cycles />
            </div>}

            <div className={Styles.formRow}>
                {!state.activeTask ? (<DefaultButton
                    key={'submit'}
                    aria-label="Iniciar nova tarefa" title="Iniciar nova tarefa" type="submit" icon={<FaPlayCircle />} color='green' />) : (<DefaultButton
                        key={'button'}
                        aria-label="Encerrar tarefa" title="Encerrar tarefa" type="button" icon={<FaPauseCircle />} color='red' onClick={handleInterruptTask} />)}
            </div>
        </form>
    )
}