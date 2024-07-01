import {ProductGrilla} from "../../components/product/ProductGrilla"

import { useLoaderData, useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services";


export async function loader({params}) {
  const {categoryName} = params
  if(!categoryName) throw new Error('No hay categoria')
  const products =  await getProductsByCategory({category:categoryName});
  return products;
}

export const CategoriesPage = () => {

  const products = useLoaderData()
  const pathname = useParams().categoryName

  const isEmpty = products?.length === 0
  const hashProducts = products?.length > 0

  return (
      <>
        <h1 className="text-center text-4xl font-bold pb-10">
          Lista de productos | {pathname}
        </h1>
        {
          isEmpty && <div>No Tenemos productos para esta categorias</div>
        }
        {
          hashProducts && <ProductGrilla productos={products} />
        }
      </>
    ) 
}
