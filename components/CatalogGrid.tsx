import ProductCard from './ProductCard';

export default function CatalogGrid({ products }: { products: any[] }) {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 dark:bg-black">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
}
