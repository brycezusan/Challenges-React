export const TodoItem = ({
  nombre,
  completado,
  id,
  completeTask,
  deleteTask,
}) => {
  return (
    <div className="border p-4 rounded shadow flex justify-evenly">
      <p className={`${completado ? "completed" : ""} text-2xl font-semibold`}>
        {nombre}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => completeTask(id)}
          className="hover:scale-110 transition-all"
        >
          ✅
        </button>
        <button
          onClick={() => deleteTask(id)}
          className="hover:scale-110 transition-all"
        >
          ❌
        </button>
      </div>
    </div>
  );
};
