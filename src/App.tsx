import { useState } from "react";

//Components
import Footter from "./components/Footer/Footter";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal";

//CSS Module
import styles from "./App.module.css";

//Interfaces
import { ITask } from "./Interfaces/ITask";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  function deleteTask(id: number) {
    console.log(`ID #${id} deletado!`);
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  }

  function updateTask(id: number, title: string, difficulty: number) {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    modalIsOpen(false);
  }

  function modalIsOpen(isOpen: boolean) {
    const modal = document.getElementById("modal");

    if (isOpen) {
      modal!.classList.remove("hidden");
    } else {
      modal!.classList.add("hidden");
    }
  }

  function editTask(task: ITask): void {
    modalIsOpen(true);
    setTaskToUpdate(task);
  }

  return (
    <div>
      <Modal>
        <TaskForm
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      </Modal>

      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <div className={styles.main_form}>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Adicionar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>

        <div>
          <h2>Lista de Tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDeleteButton={deleteTask}
            handleEditButton={editTask}
          />
        </div>
      </main>

      <footer>
        <Footter />
      </footer>
    </div>
  );
}

export default App;
