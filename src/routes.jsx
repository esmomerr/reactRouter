import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { NotFound } from "./Pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/Projects",
                element: <Projects />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "*/",
                element: <NotFound />
            }
        ],
    },
]);