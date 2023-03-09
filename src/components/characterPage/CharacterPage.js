import "./CharacterPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CharacterPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characterData, setCharacterData] = useState(null);

  const { characterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);

          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            setCharacterData(data);
          }
        },

        (error) => {
          console.log("result ERROR");
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [characterId]);

  if (error) {
    return (
      <div className="CharacterPage">
        <div className="back_section">
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
        <h1>Sorry, {error}...</h1>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="CharacterPage">
        <div className="back_section">
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>

        <div className="character_section">
          <div className="characterCard_wrapper">
            <div className="character_img">
              <img
                src={characterData.image}
                alt={characterData.name}
              />
            </div>
            <h1>{characterData.name}</h1>
            <h2>Informations</h2>
            <div className="details">
              <div className="detils_item">
                <h3>Gender</h3>
                <p>{characterData.gender || "Unknown"}</p>
              </div>
              <div className="detils_item">
                <h3>Status</h3>
                <p>{characterData.status || "Unknown"}</p>
              </div>
              <div className="detils_item">
                <h3>Specie</h3>
                <p>{characterData.species || "Unknown"}</p>
              </div>
              <div className="detils_item">
                <h3>Origin</h3>
                <p>{characterData.origin.name || "Unknown"}</p>
              </div>
              <div className="detils_item">
                <h3>Type</h3>
                <p>{characterData.type || "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CharacterPage">
        <div className="back_section">
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default CharacterPage;
