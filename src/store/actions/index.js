import axios from "axios";

export const FETCH_TEAM_START = "FETCH_TEAM_START";
export const FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS";
export const FETCH_TEAM_FAILURE = "FETCH_TEAM_FAILURE";

export const fetchTeams = (url) => (dispatch) => {
    dispatch({type: FETCH_TEAM_START});
    axios.get(url)
    .then( (res) =>{
        dispatch({type: FETCH_TEAM_SUCCESS , payload : res.data.data})
    }).catch( err => {
        console.log(err);
        dispatch({type: FETCH_TEAM_FAILURE , payload : err})
    })
}