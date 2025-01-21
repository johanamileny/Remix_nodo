import { Link } from "@remix-run/react";

export default function List() {
  const items = [
    { id: 1, name: "Elemento 1", image: "/images/image1.jpg" },
    { id: 2, name: "Elemento 2", image: "/images/image2.jpg" },
    { id: 3, name: "Elemento 3", image: "/images/image3.jpg" },
    { id: 4, name: "Elemento 4", image: "/images/image4.jpg" },
    { id: 5, name: "Elemento 5", image: "/images/image5.jpg" },
    { id: 6, name: "Elemento 6", image: "/images/image6.jpg" },
    { id: 7, name: "Elemento 7", image: "/images/image7.jpg" },
    { id: 8, name: "Elemento 8", image: "/images/image8.jpg" },
    { id: 9, name: "Elemento 9", image: "/images/image9.jpg" },
    { id: 10, name: "Elemento 10", image: "/images/image10.jpg" },
  ];

  return (
    <div>
      <h1>Lista de 10 elementos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
