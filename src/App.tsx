import { Container } from './components/Container';
import { Countdown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
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
        <form className='form'>
          <div className="formRow">
            <DefaultInput type="text" id="task" labelText="Task" placeholder='Digite algo...' />
          </div>

          <div className="form-row">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="form-row">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0 0</p>
          </div>

          <div className="form-row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}