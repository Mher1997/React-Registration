import { ADD_USER, DELETE_USER } from './action';

const addUserReducer = (state = [], action) => {
    if(action.type === ADD_USER){
        let user = action.payload
        user.key = Math.random();
        return [...state, user]
    }
    if(action.type === DELETE_USER){
        return state.filter(elem=>elem.key!==action.payload);
    }
    return state;
}

export default addUserReducer;