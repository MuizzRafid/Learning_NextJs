import Link from "next/link";

function Products() {
  const products = [
    {
      id: "1",
      name: "Mobile",
      price: 500,
    },
    {
      id: "2",
      name: "laptop",
      price: 3000,
    },
    {
      id: "3",
      name: "Watch",
      price: 5000,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((item) => (
          <div className="border p-4 rounded" key={item.id}>
            <h1 className="text-xl">{item.name}</h1>
            <h2 className="text-sm">Price : ${item.price}</h2>
            <Link href={`/product/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
