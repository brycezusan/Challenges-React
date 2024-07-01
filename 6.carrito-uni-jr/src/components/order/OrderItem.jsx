import { formatPrice } from "../../helpers";
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import {useOrder} from "../../hooks/useOrder"

export const OrderItem = ({ order }) => {
  const {removeOrder , settleOrder} = useOrder()
  return (
    <div className="border border-slate-800 shadow bg-white p-2 rounded">
      <div className="space-y-2 text-lg m-2">
        <p className="text-xs font-bold">
          ID PEDIDO : <span className="font-light">{order.id}</span>
        </p>
        <p className="font-bold text-slate-900">
          Total de productos:{" "}
          <span className="font-light">{order.totalProductsInCart}</span>
        </p>
        <p className="font-bold text-slate-900">
          Subtotal:{" "}
          <span className="font-light">{formatPrice(order.subtotal)}</span>{" "}
        </p>
        <p className="font-bold text-slate-900">
          IGV: <span className="font-light">{formatPrice(order.igv)}</span>{" "}
        </p>
        <p className="font-bold text-slate-900">
          Total: <span className="font-light">{formatPrice(order.total)}</span>{" "}
        </p>
      </div>
      <div className="flex justify-end gap-7">
        <button 
          onClick={() => settleOrder(order.id)}
          className="text-blue-400 hover:text-green-500">
          <FaCheck size={24}/>
        </button>
        <button 
          onClick={() => removeOrder(order.id)}
          className="text-red-400 hover:text-red-700">
          <MdCancel size={24} />
        </button>
      </div>
    </div>
  );
};
