import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (pedido) => {
    const confirm = window.confirm(
      "¿Estas seguro que deseas realizar este pedido?"
    );

    if (!confirm) return;
    const newOrden = {
      id: crypto.randomUUID(),
      ...pedido,
    };
    setOrder([...order, newOrden]);
  };

  const removeOrder = (id) => {
    const confirm = window.confirm(
      "¿Estas seguro que deseas eliminar este pedido?"
    )
    if(!confirm) return
    const newOrder = order.filter((order) => order.id !== id);
    setOrder(newOrder);
  };


  const settleOrder = (id) => {
    const confirm = window.confirm(
      "¿Estas seguro que deseas entregar este pedido?"
    )
    if(!confirm) return
    const newOrder = order.filter((order) => order.id !== id);
    setOrder(newOrder);
  };

  return (
    <OrderContext.Provider value={{ order, addToOrder , settleOrder , removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
