import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
function Tasks({ tasks, setIsEdit, settingEditing, handleDeleting }) {
  return (
    <div className={styles.crud_input_tasks_wrapper}>
      {tasks?.map((task) => (
        <div key={task._id} className={styles.crud_single_task_wrapper}>
          <Link
            className={styles.crud_taks}
            href={`/tasks/${task._id}`}
            key={task._id}
          >
            {task.task}
          </Link>

          <div className={styles.controllers}>
            <AiOutlineEdit
              onClick={() => {
                settingEditing(task._id);
                setIsEdit(task._id);
              }}
            />
            <AiOutlineDelete onClick={() => handleDeleting(task._id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
