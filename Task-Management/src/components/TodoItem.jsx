import { useDispatch } from 'react-redux';
import { toggleTodo } from '../store/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center gap-3 border-b border-gray-200 py-3 last:border-0">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="h-5 w-5 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span
        className={`flex-1 text-gray-800 ${
          todo.completed ? 'text-gray-400 line-through' : ''
        }`}
      >
        {todo.todo}
      </span>
    </li>
  );
};

export default TodoItem;