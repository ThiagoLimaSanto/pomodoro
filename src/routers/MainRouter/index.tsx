import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App";
import { Home } from "../../pages/Home";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { NotFound } from "../../pages/NotFound";
import { History } from "../../pages/History";
import { Settings } from "../../pages/Settings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-pomodoro/',
                element: <AboutPomodoro />
            },
            {
                path: '/history/',
                element: <History />
            },
            {
                path: '/settings/',
                element: <Settings />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])