import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state);

  if (loading) {
    return <p className="py-4 text-center text-gray-500">Loading todos...</p>;
  }

  if (error) {
    return <p className="py-4 text-center text-red-500">Error: {error}</p>;
  }

  if (todos.length === 0) {
    return <p className="py-4 text-center text-gray-500">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;