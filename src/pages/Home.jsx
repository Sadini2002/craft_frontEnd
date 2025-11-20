import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p.productId} className="border p-4 rounded">
          <img src={p.image[0]} alt={p.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-lg font-bold">{p.name}</h3>
          <p>Price: ${p.price}</p>
        </div>
      ))}
    </div>
  );
}
