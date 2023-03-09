import "./CharactersList.css";

function CharacterItem({ image, name, species }) {
  return (
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
  );
}

export default CharacterItem;
