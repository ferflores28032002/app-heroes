export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagenComics = "../../assets/heroes/" + id + ".jpg";

  return (
    <div className="card mb-3 shadow-lg" style={{ width: "340px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ height: "200px", width: "100%" }}
            src={imagenComics}
            className="animate__animated animate__fadeInLeft img-fluid rounded-start"
            alt={id}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{characters}</p>
            <p className="card-text">{first_appearance}</p>

            <p className="card-text">
              <small className="text-muted">{alter_ego}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
