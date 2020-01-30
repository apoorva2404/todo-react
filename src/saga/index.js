import { all } from 'redux-saga/effects';
import addTodo from './addTodo.saga';
import fetchTodos from './fetchTodos.saga';

export const tasks = [
    ...addTodo,
    ...fetchTodos
];

function* rootSaga(){
    yield all(tasks);
}

export default rootSaga;

