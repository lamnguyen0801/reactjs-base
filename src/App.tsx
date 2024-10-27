import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Educations from "./pages/Educations/Educations";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <About />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/educations",
          element: <Educations />
        }
      ],
    },
  ]);

  return element;
}
