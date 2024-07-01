import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

// eslint-disable-next-line react/prop-types
export const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen xl:min-h-full mt-[200px] xl:my-[130px] contenedor ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
