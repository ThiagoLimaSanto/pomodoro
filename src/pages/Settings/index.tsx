import { Container } from "../../components/Container";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { MdSave } from "react-icons/md";
import { DefaultButton } from "../../components/DefaultButton";

import Styles from "../../components/Form/styles.module.css";

export function Settings() {

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>
            <Container>
                <p className={Styles.p}>Modifique as configurações para tempo de foco, descanso curto e longo.</p>
            </Container>
            <Container>
                <form className={Styles.form}>
                    <div className={Styles.formRow}>
                        <DefaultInput id="workTime" labelText="Foco" />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultInput id="shortBreakTime" labelText="Descanso Curto" />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultInput id="longBreakTime" labelText="Descanso Longo" />
                    </div>
                    <div className={Styles.formRow}>
                        <DefaultButton icon={<MdSave />} aria-label="Salvar configurações" title="Salvar configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}