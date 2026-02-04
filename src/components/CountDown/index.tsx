import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import Styles from "./styles.module.css"

export const Countdown = () => {
    const { state } = useTaskContext()
    return (
        <div className={Styles.countdown}>
            {state.formattedSecondsRemaining}
        </div>
    )
}