import { useState } from "react";
import datos from "./data"; // Importamos los datos de las personas 


// Primer componente para mostrar cuantas personas cumplen años
function Titulo({ totalPersonas }) {
  return <h3>Hoy hay {totalPersonas} cumpleaños</h3>;
}

// Segundo componente para mostrar todas las personas que cumplen años
function Cumpleaños({ personas }) {
  //console.log(personas);
  return (
    <>
      // Recorremos array y añadimos el código html con los datos sacados de data.js
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

// Componente principal al que le pasamos los datos necesarios para el resto de componentes
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
