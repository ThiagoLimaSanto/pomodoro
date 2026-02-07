import { FaTrash } from "react-icons/fa";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/FormatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useEffect, useState } from "react";
import { sortTasks, type SortTasksOptions } from "../../utils/SortTasks";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

import Styles from "./styles.module.css"

export function History() {
    useEffect(() => {
        document.title = 'Hitórico - Pomodoro'
    }, [])
    const { state, dispatch } = useTaskContext()
    const hasTasks = state.tasks.length > 0

    const [sorttaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            direction: 'desc',
            field: 'startDate'
        }
    })

    function handleSortTasks({ field, }: Pick<SortTasksOptions, 'field'>) {
        const newDirection = sorttaskOptions.direction === 'desc' ? 'asc' : 'desc'
        setSortTaskOptions({
            tasks: sortTasks({
                tasks: sorttaskOptions.tasks,
                field,
                direction: newDirection
            }),
            direction: newDirection,
            field
        })
    }

    function handleResetHistory() {
        if (!confirm("Tem certeza que deseja apagar todo o histórico?")) return

        dispatch({ type: TaskActionTypes.RESET_STATE })
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (<span className={Styles.buttonContainer}><DefaultButton icon={<FaTrash />} color="red" aria-label="Apagar todo o histórico" title="Apagar histórico" onClick={handleResetHistory} /></span>)}
                </Heading>
            </Container>
            <Container>
                {hasTasks &&
                    (<div className={Styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={Styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa</th>
                                    <th className={Styles.thSort} onClick={() => handleSortTasks({ field: 'duration' })}>Duração</th>
                                    <th className={Styles.thSort} onClick={() => handleSortTasks({ field: 'startDate' })}>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sorttaskOptions.tasks.map((task) => {
                                    const taskTypeDictionary = { workTime: 'Foco', shortBreakTime: 'Pausa curta', longBreakTime: 'Pausa longa' }

                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>{taskTypeDictionary[task.type]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>)}
                {!hasTasks && (
                    <p className={Styles.p_history}>Ainda não existem tarefas criadas.</p>
                )}
            </Container>
        </MainTemplate>
    )
}