import { takeLatest, put } from 'redux-saga/effects';

import actionTypes from '../constants';
import { todosRef } from '../firebase';
import { fetchTodosSuccess } from '../actions';

function* fetchTodosAsync(action){
    try{
        yield todosRef.on('value', snapshot => {
            // put(fetchTodosSuccess(snapshot.val()))
            put({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: snapshot.val()})
        })
    }catch(error){
        console.log('error', error);
    }
}

export default [takeLatest(actionTypes.FETCH_TODOS_REQUEST,fetchTodosAsync)]