// React Icons
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

//Interface
import { ITask } from "../../Interfaces/ITask";

//CSS Module
import styles from "./TaskList.module.css";

type Props = {
  taskList: ITask[];
  handleDeleteButton(id: number): void;
  handleEditButton(task: ITask): void;
};

const TaskList = ({
  taskList,
  handleDeleteButton,
  handleEditButton,
}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.tasks}>
            <div>
              <h3>{task.title}</h3>
              <p>Dificuldade:{task.difficulty}</p>
            </div>

            <div className={styles.actions}>
              <i
                onClick={() => {
                  handleEditButton(task);
                }}
              >
                <FaEdit />
              </i>
              <i
                onClick={() => {
                  handleDeleteButton(task.id);
                }}
              >
                <AiFillDelete />
              </i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
