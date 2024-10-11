
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Icono.css'


export function Icono() {
  return (
    <div className='Icono'>
      <FaFacebook className='iconos' size={30} color="blue" />
      <FaInstagram className='iconos' size={30} color="#E1306C" />
      <FaWhatsapp className='iconos' size={30} color="#25D366" />
      
    </div>
  );
}



