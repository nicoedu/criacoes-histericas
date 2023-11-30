import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <ProductCard product={products[0]} />
      </section>
    </main>
  );
}
