import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../helpers";
import { IoHeartCircle } from "react-icons/io5";

export const CardProduct = ({ product }) => {
  const { addToCart, checkProduct } = useCart();
  const { id, title, price, category, image } = product;

  // const categoryName = category?.name;
  // const image = images[0]

  return (
    <div className="relative block overflow-hidden">
      <button
        className={`${
          checkProduct(id)
            ? "text-red-500 bg-black rounded-full"
            : "text-gray-400"
        } absolute right-1 top-1`}
      >
        <IoHeartCircle size={30} />
      </button>

      <div className="hidden">{id}</div>
      <img
        src={image}
        alt={`${title}-image`}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          {category}
        </span>

        <Link
          to={`/product/${id}`}
          className="block mt-4 text-lg font-medium text-gray-900 truncate"
        >
          {title}
        </Link>

        <p className="mt-1.5 text-sm text-gray-700">{formatPrice(price)}</p>

        <div className="mt-4">
          <button
            onClick={() => addToCart(product)}
            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
