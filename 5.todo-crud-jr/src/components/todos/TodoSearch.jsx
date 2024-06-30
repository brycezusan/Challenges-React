import { useSearchContext } from "../../hooks/useSearchContext"

export const TodoSearch = () => {
  const {query , handleChangeQuery} = useSearchContext()

  return (
    <form className="border rounded shadow p-4">
    <legend className="text-lg font-bold">Search Todos</legend>
    <input
      type="text"
      placeholder="enter name todo"
      className="w-full border rounded p-2 pl-4"
      onChange={handleChangeQuery}
      value={query}
    />
  </form>
  )
}
