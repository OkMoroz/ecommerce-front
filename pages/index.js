import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import Header from "@/components/Header";
import Featured from "@/components/Featured";

export default function HomePage({ product }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "652599c51ffd8a418ea93384";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}
