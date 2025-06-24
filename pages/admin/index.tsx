import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import AdminForm from '../../components/AdminForm';
import { getProducts, deleteProduct } from '../../firebase/products';

export default function AdminPage() {
  const [editProd, setEditProd] = useState(null);
  const [products, setProducts] = useState([]);
  const load = () => getProducts().then(setProducts);
  useEffect(load, []);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl mb-4">Admin Panel</h1>
        <AdminForm prod={editProd} onSave={load} />
        <ul className="mt-4">
          {products.map(p => (
            <li key={p.id} className="flex justify-between items-center p-2 border-b">
              <span>{p.name} - ${p.price}</span>
              <div>
                <button onClick={() => setEditProd(p)} className="btn-edit">Editar</button>
                <button onClick={async () => { await deleteProduct(p.id); load(); }} className="btn-del">Borrar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
