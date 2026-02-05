
import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';

import './styes/global.css';
import './styes/theme.css';

export function App() {

  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <Home />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  )
}