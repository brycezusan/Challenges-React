import { TodoCounter, TodoList, TodoSearch } from "./components/todos";
import { Modal } from "./components/modal";
import { useSearchContext } from "./hooks/useSearchContext";

function App() {
  const { taskFilterForQuery: tasks } = useSearchContext();

  return (
    <>
      <div className="max-w-3xl mx-auto py-12 w-5/6 xl:w-full">
        <h1 className="text-center text-5xl font-bold text-slate-700">
          CRUD Todos | React
        </h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList tasks={tasks} />
      </div>
      <Modal />
    </>
  );
}

export default App;
