import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

import Styles from "./styles.module.css"

export function Cycles() {
    const { state } = useTaskContext()

    const cyclesStep = Array.from({ length: state.currentCycle })

    const cicleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Pausa curta',
        longBreakTime: 'Pausa longa'
    }

    return (
        <div className={Styles.cycles}>
            <span>Ciclos:</span>

            <div className={Styles.cycleDots}>
                {cyclesStep.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span key={`${nextCycleType}_${nextCycle}`} aria-label={`Indicador de ciclo de ${cicleDescriptionMap[nextCycleType]}`} title={`Indicador de ciclo de ${cicleDescriptionMap[nextCycleType]}`} className={`${Styles.cycleDot} ${Styles[nextCycleType]}`}></span>
                    )
                })}
            </div>
        </div>
    )
}