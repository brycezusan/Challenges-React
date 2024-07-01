import { OrderItem } from "./OrderItem";

export const OrderGrilla = ({order}) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16">
      {order?.map((order) => (
       <OrderItem key={order.id} order={order} />
      ))}
    </section>
  );
};
