import { api } from "../api/axios";

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};


export const getProductsByCategory = async ({category}) => {
  const { data } = await api.get(`/products/category/${category}`);
  return data;
};


export const getProductsById = async ({id}) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};


