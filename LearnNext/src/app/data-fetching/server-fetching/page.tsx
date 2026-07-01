interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

export const dynamic = "force-dynamic";

async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch("https://dummyjson.com/products", {
    // cache: "no-store", //no-store never cache my response,always going to store fresh response
    cache: "reload", //fetches fresh response , update the cache
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

async function ServerSideFetch() {
  const products = await getProducts();
  console.log(products);

  return (
    <div>
      <h1>Server side fetching </h1>
      <h3>{products.total}</h3>
      <div className="flex flex-col gap-2">
        {products?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerSideFetch;
