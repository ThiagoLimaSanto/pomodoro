
import { Outlet } from 'react-router-dom';
import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

import './styes/global.css';
import './styes/theme.css';

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname])

  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <Outlet />
        </MessagesContainer>
      </TaskContextProvider>
    </>
  )
}