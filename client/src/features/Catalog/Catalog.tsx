import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    agent.Catalog.list()
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <LoadingComponent message="Loading Products..." />;
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
