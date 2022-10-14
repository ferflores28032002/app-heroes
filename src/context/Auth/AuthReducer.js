import { types } from "../types/types";


export const AuthReducer = (state = {}, action) => {

    switch(action.type){
        case types.Login: {

            return state;
        }
        case types.Logout: {

            return state;

        }
        default: {

            return state;
        }
    }


}