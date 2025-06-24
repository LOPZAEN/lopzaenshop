import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">Lopzaen</Link>
      <div className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
