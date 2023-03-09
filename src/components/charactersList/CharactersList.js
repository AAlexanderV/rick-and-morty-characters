import "./CharactersList.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRequestData } from "../../features/requestData/requestDataSlice";

import CharacterItem from "./CharacterItem";

function CharactersList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const characters = useSelector((state) => state.requestData.characters);
  const filterName = useSelector((state) => state.filterParameters.name);
  const currentPage = useSelector((state) => state.currentPage.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(false);
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}` + filterName)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);

          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            dispatch(setRequestData(data));
          }
        },
        (error) => {
          console.log("result ERROR");
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [dispatch, filterName, currentPage]);

  if (error) {
    return <h1>Sorry, {error}...</h1>;
  } else if (isLoaded) {
    return (
      <div className="CharactersList">
        <div className="grid_wrapper">
          {characters.map((value) => {
            return (
              <CharacterItem
                image={value.image}
                name={value.name}
                species={value.species}
                key={value.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default CharactersList;
