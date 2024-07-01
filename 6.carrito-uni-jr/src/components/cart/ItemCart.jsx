import { formatPrice } from "../../helpers";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../../hooks/useCart";

export const ItemCart = ({ product }) => {
  const { removeProduct, updateProduct } = useCart();

  const updateProductQuantity = (e) => {
    updateProduct({ id: product.id, quantity: +e.target.value });
  };

  return (
    <div className="border border-gray-100 p-2 m-1 bg-white flex items-center justify-evenly gap-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 md:w-48 md:h-48 xl:w-56 md:object-contain object-cover rounded"
      />
      <div className="space-y-3">
        <p className="font-bold text-lg text-amber-400">{product.title}</p>
        <p className="font-semibold text-xl">
          Precio : {formatPrice(product.price)}
        </p>
        <p className="font-semibold text-xl">
          Subtotal :{formatPrice(product.price * product.quantity)}
        </p>
        <select
          id="cantidad"
          value={product.quantity}
          onChange={updateProductQuantity}
          className="w-full border border-gray-200 px-2 rounded text-center"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <div className="flex justify-end">
          <button onClick={() => removeProduct(product.id)} className="">
            <AiOutlineDelete size={20} color="red" />
          </button>
        </div>
      </div>
    </div>
  );
};
