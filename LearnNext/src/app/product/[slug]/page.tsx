async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return <h1>Product Details Page {slug}</h1>;
}

export default ProductDetails;
