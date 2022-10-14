import HeroesFilter from "../helpers/HeroesFilter";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

  const heroes = HeroesFilter(publisher);

  return (
    <div className="container pt-4 d-flex flex-wrap gap-4 border justify-content-center">


      {heroes.map((hero) => (

        <HeroCard 
            key={hero.id}  
            {...hero}
        />  
      ))}


    </div>
  );
};
