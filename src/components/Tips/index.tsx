import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export function Tips() {
    const { state } = useTaskContext()
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const tipsFormWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanse longo por {state.config.longBreakTime}min</span>
    }

    const tipsFormNoActiveTask = {
        workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
        shortBreakTime: <span>Próximo ciclo é descanso curto {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo ciclo é descanso longo {state.config.longBreakTime}min</span>
    }
    return (
        <>
            {!!state.activeTask && tipsFormWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsFormNoActiveTask[nextCycleType]}
        </>
    )
}