import { Link, useLoaderData } from "react-router-dom";
import { getProductsById } from "../../services";
import {formatPrice} from "../../helpers"
import { CiStar } from "react-icons/ci";

export async function loader({ params }) {
  const { id } = params;
  if (!id) throw new Error("ID no encontrado");
  const product = await getProductsById({ id });
  return product;
}

export const ProductDetailPage = () => {
  const product = useLoaderData();

  const maxPrice = Math.ceil(product.price) + 10;

  return (
    <>
      <h1 className="text-center text-4xl text-slate-800 font-semibold mb-10">
        Detalle del Producto
      </h1>

      <section className="mt-10 max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <article className="space-y-6 md:grid md:grid-cols-2 md:gap-4 xl:gap-10">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold decoration-slate-500 underline underline-offset-8">
              {product.title}
            </h2>

            <img
              src={product.image}
              alt="producto reference image"
              className="w-full aspect-auto max-w-[450px] "
            />

          </div>

          <div className="md:flex md:flex-col-reverse md:gap-10 md:justify-center">
            <div className="flex justify-between ">
              <span className="bg-orange-100 text-orange-600 font-semibold py-1 px-2 rounded-lg">
                {product.category}
              </span>
              <p className="text-yellow-400 flex items-center gap-2">
                {product?.rating?.rate}
                <CiStar size={20} className="bg-yellow-100 rounded-full" />
              </p>
            </div>

            <div className="my-4">
            <h3 className="text-xl font-semibold text-slate-950 underline-offset-8 underline pb-4">Precio</h3>
              <span className="line-through text-3xl font-semibold text-slate-700">{formatPrice(maxPrice)}</span>
              <span className="ml-8 text-3xl font-semibold text-slate-950">{formatPrice(product.price)}</span>
            </div>
            <div>
            <h3 className="text-lg font-semibold text-slate-950 underline-offset-8 underline">Descripción</h3>
            <p className="text-lg mt-4 text-balance">{product.description}</p>
            </div>
          </div>

          <div className="col-start-2 md:flex md:justify-end">
            <Link
              to="/"
              className="bg-yellow-400 hover:bg-yellow-400/80 transition-colors text-white py-2 px-6 rounded-md font-semibold uppercase"
            >
              Ver mas Productos
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};
