import "./CharactersList.css";
import { Link } from "react-router-dom";

function CharacterItem({ image, name, species, id }) {
  return (
    <Link to={"/character/" + id}>
      <div className="CharacterItem">
        <div className="character_img">
          <img
            src={image}
            alt={name}
          />
        </div>

        <div className="character_details">
          <h2>{name}</h2>
          <p>{species}</p>
        </div>
      </div>
    </Link>
  );
}

export default CharacterItem;
