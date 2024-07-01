import { useOrder } from "../../hooks/useOrder";
import { OrderGrilla } from "../../components/order/OrderGrilla";

export const OrderPage = () => {
  const { order } = useOrder();
  const isEmpty = order?.length === 0;

  return (
    <>
      <h1 className="text-4xl font-bold text-slate-500 text-center">
        Ordenes y/o Pedidos realizados
      </h1>

      {isEmpty ? (
        <p className="text-2xl text-red-400 pt-10 text-center col-span-3">
          No hay pedidos Realizados aun
        </p>
      ) : (
        <OrderGrilla order={order} />
      )}
    </>
  );
};
