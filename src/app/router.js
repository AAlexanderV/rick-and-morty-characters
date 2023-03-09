import { createBrowserRouter } from "react-router-dom";

import Main from "../components/main/Main";
import CharacterPage from "../components/characterPage/CharacterPage";
import ErrorPage from "../components/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/character/:characterId/",
    element: <CharacterPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
