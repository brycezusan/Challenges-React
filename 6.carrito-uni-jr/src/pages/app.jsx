import { redirect, useLocation } from "react-router-dom";

const App = () => {
  const pathname = useLocation().pathname;
  if (pathname === "/") {
    redirect("/home");
  }
};

export default App;
