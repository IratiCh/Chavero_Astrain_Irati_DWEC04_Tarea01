import { useState } from "react";
import datos from "./data";

function Titulo({ totalPersonas }) {
  return <h3>Hoy hay {totalPersonas} cumpleaños</h3>;
}

function Cumpleaños({ personas }) {
  console.log(personas);
  return (
    <>
      {personas.map((persona) => (
        <article key={persona.id} className="person">
          <img src={persona.image} alt={persona.name} />
          <div>
            <h4>{persona.name}</h4>
            <p>{persona.age} años</p>
          </div>
        </article>
      ))}
    </>
  );
}

export default function App() {
  const [personas] = useState(datos);
  return (
    <main>
      <section className="container">
        <Titulo totalPersonas={personas.length} />
        <Cumpleaños personas={personas} />
      </section>
    </main>
  );
}
