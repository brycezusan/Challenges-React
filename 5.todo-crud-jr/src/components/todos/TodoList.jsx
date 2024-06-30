import { useTaskContext } from "../../hooks/useTaskContext";
import { TodoItem } from "./TodoItem";

export const TodoList = ({tasks}) => {

  const { completeTask , deleteTask} = useTaskContext()

  if (tasks.length === 0) {
    return (
      <p className="text-center py-12 font-bold text-red-500">
        No hay tareas pendientes
      </p>
    );
  }

  return (

    <>
      <h2 className="pt-8 text-center text-blue-700 text-3xl font-bold">Lista de Tareas</h2>
      <section className="grid grid-cols-1 gap-4 pt-8 ">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            {...task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </>
  );
};
