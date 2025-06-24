import { useScarcity } from '../hooks/useScarcity';
import { useUrgency } from '../hooks/useUrgency';

export default function ProductCard({ product }: { product: any }) {
  const scarcity = useScarcity(product.stock);
  const urgency = useUrgency();

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:scale-105 transform transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{product.description}</p>
      <div className="mt-2 text-xl font-semibold">${product.price}</div>
      {scarcity && <div className="text-red-500 text-sm">{scarcity}</div>}
      <div className="text-green-600 text-xs">{urgency}</div>
    </div>
  );
}
