// import { todosRef } from '../firebase';
import actionTypes from '../constants';

export const addTodo = (data) => {
    return {
        type: actionTypes.ADD_TODO_REQUEST,
        payload: data
    }
}

export const fetchTodo = () => {
    return {
        type: actionTypes.FETCH_TODOS_REQUEST,
    }
}

export const fetchTodosSuccess = (data) => {
    console.log('data', data)
    return {
        type: actionTypes.FETCH_TODOS_SUCCESS,
        payload: Object.values(data)
    }
}



