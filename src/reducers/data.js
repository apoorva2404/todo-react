import actiontypes from '../constants';
// const initialState = {
    
// }


export default (state = {}, action) => {
    switch(action.type) {
        case actiontypes.FETCH_TODOS:
            return action.payload;
        default:
            return state;

    }
}