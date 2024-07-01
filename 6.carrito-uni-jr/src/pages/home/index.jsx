import { Loader } from "../../components/loader/Loader";
import { ProductGrilla } from "../../components/product/ProductGrilla";
import { NoProducts } from "../../components/product/NoProducts";
import { useProducts } from "../../hooks/useProducts";

export const HomePage = () => {
  const { isEmpty, productos, loading, handleChangeQuery } = useProducts();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h1 className="text-center text-4xl font-bold pb-10">
            Nuestros productos
          </h1>
          <div className="flex justify-center">
            <input
              onChange={handleChangeQuery}
              className="w-full border border-slate-800 rounded p-2 mb-10 max-w-[450px]"
              type="text"
              placeholder="search for product"
            />
          </div>
        </>
      )}

      {isEmpty && !loading && <NoProducts />}
      {!isEmpty && <ProductGrilla productos={productos} />}
    </>
  );
};
