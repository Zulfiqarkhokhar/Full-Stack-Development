import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
} from './store/actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch(fetchTodosRequest());
      try {
        const response = await fetch('https://dummyjson.com/todos?limit=3');
        const data = await response.json();
        dispatch(fetchTodosSuccess(data.todos));
      } catch (err) {
        dispatch(fetchTodosFailure(err.message));
      }
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Task Manager</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;