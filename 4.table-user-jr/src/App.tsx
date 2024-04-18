import { useEffect, useMemo, useRef, useState } from "react";
import { SortBy, User } from "./types";
import UserList from "./components/UserList";
import Spinnet from "./components/Spinnet";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [colorear, setColorear] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filtroPais, setFiltroPais] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const userOriginal = useRef<User[]>([]);

  const obtenerDataUsers = async () => {
    try {
      setLoading(true);
      const {results} = await getUsers(currentPage);
      setUsers(prevState => prevState.concat(results))
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    obtenerDataUsers()
  }, [currentPage]);



  const deleteUser = (id: string) => {
    const newUsers = users.filter((state) => state.login.uuid !== id);
    setUsers(newUsers);
  };

  const filterUserCountry =
    filtroPais !== "" && filtroPais.length > 0
      ? users.filter((userState) =>
          userState.location.country
            .toLowerCase()
            .includes(filtroPais.toLowerCase())
        )
      : users;

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filterUserCountry;
    if (sorting === SortBy.COUNTRY) {
      return [...filterUserCountry].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      );
    }
    if (sorting === SortBy.NAME) {
      return [...filterUserCountry].sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
    }
    if (sorting === SortBy.LAST) {
      return [...filterUserCountry].sort((a, b) =>
        a.name.last.localeCompare(b.name.last)
      );
    }
  }, [filterUserCountry, sorting]);

  const toogleSorting = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const restaurar = () => {
    setUsers(userOriginal.current);
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  const handleChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroPais(e.target.value);
  };

  return (
    <>
      <header className="max-w-5xl mx-auto py-16 space-y-5 w-11/12">
        <h1 className="text-6xl font-bold text-center">Prueba Tecnica</h1>
        <div className="flex gap-2 justify-center pt-5">
          <button
            onClick={() => setColorear(!colorear)}
            className="bg-slate-900 w-[120px] py-2 rounded-md hover:bg-slate-950"
          >
            Colorear
          </button>
          <button
            onClick={toogleSorting}
            className="bg-slate-900 w-[120px] py-2 rounded-md hover:bg-slate-950"
          >
            {sorting === SortBy.NONE ? "ordenar" : "default"}
          </button>
          <button
            onClick={restaurar}
            className="bg-slate-900 w-[120px] py-2 rounded-md hover:bg-slate-950"
          >
            Restaurar
          </button>

          <input
            type="text"
            placeholder="australia , brazil , canada.."
            className="px-4 rounded-md text-slate-900"
            onChange={handleChangeCountry}
            value={filtroPais}
          />
        </div>
      </header>
      <main className="max-w-5xl mx-auto">
        {users.length > 0 && (
          <>
            <UserList
              users={sortedUsers}
              handleChangeSort={handleChangeSort}
              colorear={colorear}
              deleteUser={deleteUser}
            />
          </>
        )}
        {loading ? (
          <Spinnet />
        ) : (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-1 bg-slate-950 rounded-md"
            >
              Cargar más...
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
