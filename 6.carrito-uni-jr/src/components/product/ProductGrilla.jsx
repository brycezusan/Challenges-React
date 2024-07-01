import { CardProduct } from "./CardProduct"

export const ProductGrilla = ({productos}) => {
  return (
    <section className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {productos.map((product) => (
      <CardProduct key={product.id} product={product} />
    ))}
  </section>
  )
}
