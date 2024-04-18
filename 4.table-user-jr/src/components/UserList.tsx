import { SortBy, User } from "../types";

type UserListProps ={
  users:User[] | undefined,
  colorear:boolean,
  deleteUser:(id:string)=>void,
  handleChangeSort:(sort:SortBy)=>void
}

export default function UserList({users , colorear , deleteUser , handleChangeSort  } : UserListProps) {
  return (
    <table className="table-auto border-spacing-5 border-separate w-full">
      <caption className="caption-top mb-4">Table 3.1: List Users.</caption>
      <thead>
        <tr>
          <th>Photo</th>
          <th className="cursor-pointer" onClick={()=>handleChangeSort(SortBy.NAME)}>
            Nombre
          </th>
          <th className="cursor-pointer" onClick={()=>handleChangeSort(SortBy.LAST)}>Apellido</th>
          <th className="cursor-pointer" onClick={()=>handleChangeSort(SortBy.COUNTRY)}>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <>
              <tr
                key={user.login.username}
                className={`${colorear ? "colorear" : ""} text-center`}
              >
                <td>
                  <img
                    className="mx-auto"
                    src={user.picture.thumbnail}
                    alt={`image-${user.name.title}`}
                  />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button
                    onClick={()=>deleteUser(user.login.uuid)} 
                    className="bg-slate-900 w-full py-2 rounded-md hover:bg-slate-950">
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
