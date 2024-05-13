"use client"
import CategoriesLists from "@/components/CategoryLists";
import FeatureProducts from "@/components/FeatureProducts​";
import HomeProduct from "@/components/HomeProductGrid";
import useFetchProduct from "@/hooks/useFetchProduct";



export default function Home() {

  const { isFetchingProduct, isFetchingError, products } = useFetchProduct()
  if (isFetchingProduct) {
    return <div className="text-center p-5 ">Loading...</div>
  }
  if (isFetchingProduct) {
    return <div>Something Want Wrong...</div>
  }
  return (
    <main >
      {/* {
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      } */}
      <HomeProduct />

      <FeatureProducts />
      <CategoriesLists />

    </main>
  );
}
