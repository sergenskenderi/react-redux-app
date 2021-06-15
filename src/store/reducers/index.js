import { FETCH_TEAM_START , FETCH_TEAM_SUCCESS , FETCH_TEAM_FAILURE } from "../actions";

const initialState = {
    teams : [],
    error : "",
    isLoading : false
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TEAM_START:
      return {
        ...state,
        isLoading: true
      };
       case FETCH_TEAM_SUCCESS :
           return {
               ...state,
               isLoading : false,
               teams : action.payload
           }
        case FETCH_TEAM_FAILURE :
            return {
                ...state,
                isLoading : false,
                teams : [],
                error : action.payload
            }
        default :
        return state;
    }
}