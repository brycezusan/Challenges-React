import { useContext } from "react";
import { TaskContext } from "../context/TaskContextProvider";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw Error("useTaskContext must be used inside a TaskContextProvider");
  }

  return context;
};
