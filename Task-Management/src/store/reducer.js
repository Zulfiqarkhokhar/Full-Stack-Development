import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  TOGGLE_TODO,
} from './actions';

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todosReducer;