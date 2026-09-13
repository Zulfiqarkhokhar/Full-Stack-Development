// Action Types
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });