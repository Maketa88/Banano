import eje from "../../assets/Images/eje1.jpg";
import eje2 from "../../assets/Images/eje2.jpg";
import eje3 from "../../assets/Images/eje3.jpg";


import { Vision } from "../../Components/Vision/Vision";
import "./vision.css";

export const Compania = () => {
  return (
    <>
      <Vision
  imageUrl={eje}
  contenido="logo"
  titulo="Principales características del banano"
  parrafo="El banano es una fruta nutritiva con múltiples beneficios, perfecta para quienes buscan una fuente rápida de energía."
  items={[
    "Forma y aspecto: Fruta alargada y curvada, con una cáscara que pasa de verde a amarilla cuando madura. La pulpa es suave y dulce, de color crema o blanco.",
    "Sabor: Dulce y suave cuando está maduro. Las bananas verdes son más neutras y ligeramente astringentes.",
    "Textura: Su pulpa es cremosa, perfecta para consumir cruda o en batidos.",
    "Nutrientes clave: Alto en carbohidratos, principalmente en forma de azúcares naturales (glucosa, fructosa y sacarosa), y fibra.",
    "Propiedades energéticas: Ideal como fuente rápida de energía, especialmente para deportistas."
  ]}
/>
<Vision
  imageUrl={eje2}
  contenido="logo"
 
  titulo="Dos principales vitaminas del banano"
  parrafo="Vitamina 6:"
  items={[
    "Contribuye al metabolismo de proteínas y grasas.",
    "Ayuda a la producción de neurotransmisores, mejorando la función cerebral.",
    "Juega un papel importante en la formación de glóbulos rojos.",
    "Vitamina C:",
    "Potente antioxidante que fortalece el sistema inmunológico.",
    "Promueve la absorción de hierro en el cuerpo.",
    "Es esencial para la salud de la piel, ya que participa en la producción de colágeno."
  ]}
/>
<Vision
  imageUrl={eje3}
  contenido="logo"
  titulo="Contraindicaciones del consumo de banano"
  
  parrafo="Diabetes: Aunque el banano tiene fibra, también es relativamente alto en azúcar, por lo que se debe consumir con moderación en personas con diabetes o niveles elevados de azúcar en sangre."
  items={[
    "Problemas renales: Dado su alto contenido en potasio, las personas con problemas renales, que tienen dificultades para eliminar el exceso de potasio del cuerpo, deben limitar su consumo.",
    "Migrañas: En algunos casos, los bananos pueden desencadenar migrañas debido a la presencia de tiramina, un compuesto que puede provocar dolores de cabeza en personas sensibles."
   
  ]}
/>



    </>
  );
};
