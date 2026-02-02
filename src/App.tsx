
import { Container } from './components/Container';
import { Countdown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styes/global.css';
import './styes/theme.css';

export function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <section>Footer</section>
      </Container>
    </>
  )
}