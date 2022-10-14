import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: true,
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState )

  return (

    <AuthContext.Provider value={{}}  >

        {children}


    </AuthContext.Provider>


  )
}
