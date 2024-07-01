import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useOrder } from "../../hooks/useOrder";
import { formatPrice } from "../../helpers";


const Checkout = () => {
  const { totalProductsInCart, subtotal , clearCart } = useCart();
  const {addToOrder} = useOrder();
  const navigate = useNavigate()

  const igv = subtotal * 0.17;
  const total = subtotal + igv;


  const addOrder =()=>{
    const pedido = {
      totalProductsInCart,
      subtotal,
      igv,
      total
    }

    addToOrder(pedido)
    setTimeout(() => {
      navigate('/')
      clearCart();
    }, 1000);

  }
  
  return (
    <div className="">
      <div className="md:fixed bg-slate-100 md:w-1/3 p-4 border">
        <h2 className="text-2xl font-bold">Checkout Pedidos</h2>
        <p className="text-lg font-semibold">Total de productos: {totalProductsInCart}</p>
        <p className="font-semibold">
          Subtotal : {formatPrice(subtotal.toFixed(2))}
        </p>
        <p className="font-semibold">IGV : {formatPrice(igv.toFixed(2))} </p>
        <p className="text-xl font-semibold">
          Total: {formatPrice(total.toFixed(2))}
        </p>
        <button 
          onClick={addOrder}
          className="bg-slate-800 p-2 mt-4 rounded text-white">
          Realizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Checkout;
