import axios from "axios";
const ROUTE= "http://localhost:3001"

export const getSecretFiles = (username) => async (dispatch) => {
    try {
        var json = await axios.get(ROUTE+"/files/data");
        return dispatch({
            type:"GET_FILES" ,
            payload :json.data
        })
    } catch (error) {
        console.log(error);
    }
};