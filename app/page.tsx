"use client"
import useFetchProduct from "@/hooks/useFetchProduct";


export default function Home() {

  const { isFetchingProduct, isFetchingError, products } = useFetchProduct()
  if (isFetchingProduct) {
    return <div>Loading...</div>
  }
  if (isFetchingProduct) {
    return <div>Something Want Wrong...</div>
  }
  return (
    <main >
      {
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }
      {
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }{
        products.map(product => {
          return <h1 key={product.id}>{product.title}</h1>
        })
      }

    </main>
  );
}
