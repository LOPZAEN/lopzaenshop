import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CatalogGrid from '../components/CatalogGrid';
import Footer from '../components/Footer';
import { getProducts } from '../firebase/products';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CatalogGrid products={products} />
      <Footer />
    </>
  );
}
