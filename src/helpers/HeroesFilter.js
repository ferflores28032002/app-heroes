import { heroes } from "../data/heroes";

const HeroFilter = (publisher) => {
  const types = ["DC Comics", "Marvel Comics"];

  if (!types.includes(publisher)) {
    throw new Error(`El publisher ${publisher} no existe`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export default HeroFilter;
