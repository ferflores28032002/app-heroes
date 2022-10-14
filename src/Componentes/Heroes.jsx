import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/Auth/AuthProvider";
import { Routers } from "../Routers/Routers";
import { Login } from "./Login";

export const Heroes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<Routers />} />
      </Routes>
    </AuthProvider>
  );
};
