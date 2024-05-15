"use client"
import CategoriesLists from "@/components/CategoryLists";
import FeatureProducts from "@/components/FeatureProducts​";
import HomeProduct from "@/components/HomeProductGrid";
import useFetchProduct from "@/hooks/useFetchProduct";



export default function Home() {

  return (
    <main >

      <HomeProduct />
      <FeatureProducts />
      <CategoriesLists />

    </main>
  );
}
