import { useState } from "react";

export const useModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return{
    isOpen,
    open,
    close
  }
}