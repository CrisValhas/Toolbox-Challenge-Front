// import { ROUTE } from "@env";
// const ROUTE = "http://192.168.0.16:3001";

const initialState = {
        files: {},
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_FILES":
            return{
                ...state,
                files: action.payload,
            };
    default:
        return state;
    };
};

export default rootReducer;
