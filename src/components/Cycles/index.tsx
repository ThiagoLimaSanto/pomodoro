import Styles from "./styles.module.css"

export function Cycles() {
    return (
        <div className={Styles.cycles}>
            <span>Ciclos:</span>

            <div className={Styles.cycleDots}>
                <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
                <span className={`${Styles.cycleDot} ${Styles.longBreakTime}`}></span>
            </div>
        </div>
    )
}