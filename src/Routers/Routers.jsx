import { Navigate, Route, Routes } from "react-router-dom";
import { Header, DcMarvel, SearchComics, MarvelComics } from "../Componentes/";

export const Routers = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchComics />} />
        <Route path="/dc" element={<DcMarvel />} />
        <Route path="/marvel" element={<MarvelComics />} />
        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </>
  );
};
