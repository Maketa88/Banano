
export const Vision = ({ titulo, items, imageUrl, contenido, parrafo }) => {
  return (
    <>
      <div className="countero">
        <div className='mision'>
          <h1>{titulo}</h1>
          {/* Renderizar una lista desordenada en lugar del párrafo */}
          
          <ul>
            <p>{parrafo}</p>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
        </div>
        <img className="Imagen" src={imageUrl} alt={contenido} />
        
      </div>
    </>
  );
};
