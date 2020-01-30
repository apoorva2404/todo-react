import { takeLatest } from 'redux-saga/effects';

import actionTypes from '../constants';
import { todosRef } from '../firebase';
// import { addTodoSuccess } from '../actions';


function* addTodoAsync(action){
    const { payload } = action;
    try{
        yield todosRef.push().set(payload);
        // yield put(addTodoSuccess(payload))
        
    }catch(error){
        console.log('error', error)
    }
}

export default [takeLatest(actionTypes.ADD_TODO_REQUEST, addTodoAsync)];


