import { Container } from "../../components/Container";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { MdSave } from "react-icons/md";
import { DefaultButton } from "../../components/DefaultButton";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

import Styles from "../../components/Form/styles.module.css";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
    useEffect(() => {
        document.title = 'Configurações - Pomodoro'
    }, [])

    const { state, dispatch } = useTaskContext()
    const workTimeInputRef = useRef<HTMLInputElement>(null)
    const shortBreakTimeInputRef = useRef<HTMLInputElement>(null)
    const longBreakTimeInputRef = useRef<HTMLInputElement>(null)

    function handleSaveSettings(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        showMessage.dismiss()

        const formErros = []

        const workTime = Number(workTimeInputRef.current?.value)
        const shortBreakTime = Number(shortBreakTimeInputRef.current?.value)
        const longBreakTime = Number(longBreakTimeInputRef.current?.value)

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) formErros.push('Use apenas números para TODOS os campos!')

        if (workTime < 1 || workTime > 99) {
            formErros.push('O tempo de foco deve estar entre 1 e 99 minutos!')
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErros.push('O tempo de descanso curto deve estar entre 1 e 30 minutos!')
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErros.push('O tempo de descanso longo deve estar entre 1 e 60 minutos!')
        }

        if (formErros.length > 0) return formErros.forEach(error => showMessage.error(error))

        dispatch({
            type: TaskActionTypes.CHANGE_SETTINGS,
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            }
        })

        showMessage.success('Configurações salvas!')
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>
            <Container>
                <p className={Styles.p}>Modifique as configurações para tempo de foco, descanso curto e longo.</p>
            </Container>
            <Container>
                <form onSubmit={handleSaveSettings} className={Styles.form}>
                    <div className={Styles.formRow}>
                        <DefaultInput id="workTime" labelText="Foco" ref={workTimeInputRef} defaultValue={state.config.workTime} type="number" maxLength={2} />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultInput id="shortBreakTime" labelText="Descanso Curto" ref={shortBreakTimeInputRef} defaultValue={state.config.shortBreakTime} type="number" maxLength={2} />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultInput id="longBreakTime" labelText="Descanso Longo" ref={longBreakTimeInputRef} defaultValue={state.config.longBreakTime} type="number" maxLength={2} />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultButton icon={<MdSave />} aria-label="Salvar configurações" title="Salvar configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}