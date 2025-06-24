import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./config";

const db = getFirestore(firebaseApp);
const productsRef = collection(db, "products");

export async function getProducts() {
  const snap = await getDocs(productsRef);
  return snap.docs.map(d => ({ ...d.data(), id: d.id }));
}

export async function addProduct(prod: any) {
  await addDoc(productsRef, prod);
}

export async function updateProduct(id: string, data: any) {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
}

export async function deleteProduct(id: string) {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
}
