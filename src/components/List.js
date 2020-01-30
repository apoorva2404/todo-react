import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTodo, fetchTodo } from '../actions'

const List = (props) => {
    const [todoItem, setTodoItem] = useState('');
    const onChangeHandler = (event) => {
        // props.addTodo(event.target.value);
        setTodoItem(event.target.value);
    }
    useEffect(() => {
        props.fetchTodos();
    }, );
    return(
        <div>
            TODO
            <input type='text' onChange={(event) => onChangeHandler(event)}/>
            <button onClick={() => props.addTodo(todoItem)}>Add</button>
        </div>

    );
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo : (todoItem) => {
            dispatch(addTodo(todoItem))
        },
        fetchTodos : () => {
            dispatch(fetchTodo());
        }
    }
}


export default connect(null, mapDispatchToProps)(List);