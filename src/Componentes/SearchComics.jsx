import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "./HeroCard";
import { SearchByHero } from "../helpers/SearchByHero";

export const SearchComics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);

  const dato = SearchByHero(query.search);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="container card mt-3 shadow-lg"
      style={{ minHeight: "80vh" }}
    >
      <div className="card-title pt-4 text-center">
        <h3>Search Comics</h3>
        <hr />
      </div>

      <div className="row pt-3">
        <div className="col-md-6">
          <form onSubmit={onSubmit} className="card py-5 px-4">
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="marvel"
                placeholder="Search Comics"
                autoFocus
                onChange={(e) => navigate("?search=" + e.target.value)}
              />
              <label className="label-control">Search Comics</label>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          {dato.length === 0 ? (
            <div className="alert alert-primary">Busca un Heroe</div>
          ) : (
            <div>
              {dato.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
