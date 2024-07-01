import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";

const navegacion = [
  { to: "/", label: "user@user.com" },
  { to: "/order", label: "My Orders" },
  { to: "/account", label: "My Account" },
  { to: "/login", label: "Sign In" },
];

export const Header = () => {
  const { totalProductsInCart } = useCart();
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <header className="bg-gray-100 fixed top-0 w-full z-30">
      <nav className="contenedor font-semibold flex flex-col gap-3 justify-between items-center xl:flex-row xl:gap-10">
        <Link to="/home" className="text-3xl font-bold">
          Shopping
        </Link>

        <div className="flex flex-col gap-3 items-center xl:flex-1  xl:justify-between xl:flex-row ">
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : "black"
                }
                to="/"
              >
                All
              </NavLink>
            </li>
            {categorias?.map((cat) => (
              <li key={cat}>
                <NavLink
                  to={`/categories/${cat}`}
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4 capitalize" : "black capitalize"
                  }
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex gap-2 items-center">
            {navegacion.map((nav) => (
              <li key={nav.to}>
                <NavLink to={nav.to}>{nav.label}</NavLink>
              </li>
            ))}
            <li className="p-1 relative">
              <NavLink to="/cart">
                <IoCartOutline size={30} />
              </NavLink>
              <span className="absolute -top-2 -right-1 text-sm font-bold text-red-400">
                {totalProductsInCart}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
