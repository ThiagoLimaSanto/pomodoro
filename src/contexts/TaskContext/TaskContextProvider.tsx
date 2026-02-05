import { useEffect, useReducer, useRef } from "react"
import { loadBeep } from "../../utils/loadBeep"
import { TimerWorkerManager } from "../../workers/TimerWorkerManager"
import { initialTaskState } from "./initialTaskState"
import { TaskActionTypes } from "./taskActions"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer"
import type { TaskStateModel } from "../../models/TaskStateModel"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem('state')

        if (!storageState) return initialTaskState

        const parsedStorageState = JSON.parse(storageState) as TaskStateModel

        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
        }
    })
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

    const worker = TimerWorkerManager.getInstance()

    useEffect(() => {
        worker.onmessage((e: MessageEvent) => {
            const countDownSeconds = e.data

            if (countDownSeconds <= 0) {
                playBeepRef.current?.()
                playBeepRef.current = null

                dispatch({ type: TaskActionTypes.COMPLETE_TASK })
                worker.terminate()
            } else {
                dispatch({
                    type: TaskActionTypes.COUNT_DOWN,
                    payload: { secondsRemaining: countDownSeconds }
                })
            }
        })
    }, [worker, dispatch])

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
        if (!state.activeTask) {
            worker.terminate()
        }

        document.title = `${state.formattedSecondsRemaining} - Pomodoro`

        worker.postMessage(state)
    }, [state, worker])


    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep()
        } else {
            playBeepRef.current = null
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}