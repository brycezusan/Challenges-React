import { CiTrash } from "react-icons/ci";
import { useTaskContext } from "../../hooks/useTaskContext";

export const TodoCounter = () => {
  const { allTasks, completedTasks, clearTasks, tasks } = useTaskContext();

  const isCompleteTasks = allTasks === completedTasks;
  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold text-center">
        Has completado {completedTasks} de {allTasks}
      </h2>

      {isCompleteTasks && tasks.length > 0 && (
        <button onClick={clearTasks} className="mx-auto block pt-6">
          <CiTrash size={40} color="red" />
        </button>
      )}
    </div>
  );
};
