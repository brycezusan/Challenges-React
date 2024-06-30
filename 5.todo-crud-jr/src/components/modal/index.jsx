import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdAddCircle } from "react-icons/io";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { Alerta } from "../alerta";
import { useTaskContext } from "../../hooks/useTaskContext";

export const Modal = () => {
  const { createTask } = useTaskContext();
  const { open, isOpen, close } = useModal();
  const [query, setQuery] = useState("");
  const [alerta, setAlerta] = useState("");

  const onSubmitTask = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setAlerta({ msg: "El campo es obligatorio", tipo: "error" });
      return;
    }
    createTask(query);
    setQuery("");
    setAlerta({ msg: "Tarea Creada", tipo: "success" });
    setTimeout(() => {
      close();
      setAlerta("");
    }, 1100);
  };

  return (
    <>
      <Button className="absolute right-5 bottom-10" onClick={open}>
        <IoMdAddCircle size={50} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-slate-900/90 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Ingresar Nuevo Todo
              </DialogTitle>
              <form onSubmit={onSubmitTask}>
                <input
                  className="w-full py-2 rounded pl-4"
                  type="text"
                  placeholder="Nueva Tarea"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
                <div className="mt-4">
                  <input
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    type="submit"
                    value="Añadir"
                  />
                </div>
                {alerta && <Alerta tipo={alerta.tipo}>{alerta?.msg}</Alerta>}
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
