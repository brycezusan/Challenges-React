import { useCart } from "../../hooks/useCart";
import { NoProducts } from "../../components/product/NoProducts";
import { ItemCart } from "../../components/cart/ItemCart";
import Checkout from "../../components/cart/Checkout";

export const CartPage = () => {
  const { cart } = useCart();

  const isEmpty = cart.length === 0;

  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-slate-800">
        Listado de productos seleccionados
      </h1>

      {isEmpty && (
        <div className="mt-10">
          <NoProducts />
        </div>
      )}

      {!isEmpty && (
        <section className="grid grid-cols-1 gap-3 lg:gap-10 mt-12 md:grid-cols-2 items-start">
          <section className="grid grid-cols-1 gap-2">
            <h2 className="text-lg font-bold text-slate-600">
              Productos agregados
            </h2>
            {cart.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
          </section>

          <Checkout />
        </section>
      )}
    </>
  );
};
