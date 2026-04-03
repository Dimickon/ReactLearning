import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

export default function TodosAction({
  completedTodosExist,
  resetTodos,
  deleteCompletedTodos,
}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button onClick={resetTodos} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={deleteCompletedTodos}
        title="Clear completed todos"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
