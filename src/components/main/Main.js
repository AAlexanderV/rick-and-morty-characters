import { useSelector } from "react-redux";

import "./Main.css";
import LoginWindow from "../loginWindow/LoginWindow";
import Header from "../header/Header";
import CharactersList from "../charactersList/CharactersList";
import Pagination from "../pagination/Pagination";

function Main() {
  const loggedUser = useSelector((state) => state.loggedUser.data);

  if (!loggedUser) {
    return <LoginWindow />;
  } else
    return (
      <div className="Main">
        <Header />
        <CharactersList />
        <Pagination />
      </div>
    );
}

export default Main;
