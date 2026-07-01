async function getProducts() {
  //simulate dummy error here
  const shouldError = Math.random() > 0.5;
  if (shouldError) {
    throw new Error("Failed to fetch product");
  }
  return [
    {
      id: 1,
      name: "One",
    },
    {
      id: 2,
      name: "Two",
    },
    {
      id: 3,
      name: "Three",
    },
  ];
}
export default async function ErrorExample() {
  const products = await getProducts();
  return (
    <div>
      <h1>Product List </h1>
      <div>
        {products.map((p) => (
          <div className="pt-2" key={p.id}>
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
