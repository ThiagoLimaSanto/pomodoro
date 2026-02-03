import { Container } from "../../components/Container";
import { Countdown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {

    return (
        <MainTemplate>
            <Container>
                <Countdown />
            </Container>
            <Container>
                <Form />
            </Container>
        </MainTemplate>
    )
}