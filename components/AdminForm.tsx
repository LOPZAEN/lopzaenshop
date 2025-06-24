import { useState, useEffect } from 'react';
import { addProduct, updateProduct } from '../firebase/products';

export default function AdminForm({ prod, onSave }: { prod: any, onSave: () => void }) {
  const [form, setForm] = useState({ name: '', price: 0, image: '', stock: 0, description: '', category: '' });
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (prod) setForm(prod);
  }, [prod]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, price } = form;
    if (!name || price <= 0) {
      setStatus('error');
      return;
    }

    setStatus('saving');
    try {
      if (prod?.id) await updateProduct(prod.id, form);
      else await addProduct(form);
      setForm({ name: '', price: 0, image: '', stock: 0, description: '', category: '' });
      setStatus('success');
      onSave();
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
      {['name', 'price', 'image', 'stock', 'description', 'category'].map(field => (
        <input key={field} name={field} value={form[field as keyof typeof form]} onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500" />
      ))}
      <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition">
        {prod ? 'Actualizar' : 'Crear'}
      </button>
      {status === 'success' && <p className="text-green-500">Guardado correctamente ✅</p>}
      {status === 'error' && <p className="text-red-500">Error al guardar. Revisa los campos ❌</p>}
    </form>
  );
}
