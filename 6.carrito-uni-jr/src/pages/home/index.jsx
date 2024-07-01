import { Loader } from "../../components/loader/Loader";
import { ProductGrilla } from "../../components/product/ProductGrilla";
import { NoProducts } from "../../components/product/NoProducts";
import { useProducts } from "../../hooks/useProducts";

export const HomePage = () => {


  const {isEmpty , productos , loading} = useProducts()

  return (
    <>
      {!isEmpty ? (
        <>
          <h1 className="text-center text-4xl font-bold pb-10">
            Nuestros productos
          </h1>
          <ProductGrilla productos={productos} />
        </>
      ) : (
        <div>{loading ? <Loader /> : <NoProducts />}</div>
      )}
    </>
  );
};
