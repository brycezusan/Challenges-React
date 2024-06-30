import { createContext, useEffect, useState } from "react";
// import { tareas as data } from "../data/tareas";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const initialState = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };  

  const [tasks, setTasks] = useState(initialState());

  const allTasks = tasks.length;
  const completedTasks = tasks.filter((tarea) => tarea.completado).length;

  const tasksLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    tasksLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  const completeTask = (id) => {
    const newTask = tasks.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completado: !tarea.completado,
        };
      }
      return tarea;
    });

    setTasks(newTask);
  };

  const deleteTask = (id) => {
    const newTask = tasks.filter((tarea) => {
      return tarea.id !== id;
    });
    setTasks(newTask);
  };

  const clearTasks = () => {
    const confirm = window.confirm(
      "¿Estas seguro de que deseas borrar todas las tareas?"
    );
    if (!confirm) return;
    setTasks([]);
    localStorage.clear();
  };

  const createTask = (tarea) => {
    const newTask = {
      id: crypto.randomUUID(),
      nombre: tarea,
      completado: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        allTasks,
        completeTask,
        completedTasks,
        deleteTask,
        clearTasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
