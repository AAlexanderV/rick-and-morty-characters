import "./Main.css";
import Header from "../header/Header";
import CharactersList from "../charactersList/CharactersList";
import Pagination from "../pagination/Pagination";

function Main() {
  return (
    <div className="Main">
      <Header />
      <CharactersList />
      <Pagination />
    </div>
  );
}

export default Main;
