import React from 'react';
import { Link } from 'react-router-dom'; 
const PagoComponent = () => {
  
  return (
    <div>
      <h2>Pago Management</h2>
      <div> 
          <Link to="/"> 
            <br/>
            <button>Volver a la página principal</button>
          </Link>
        </div>
    </div>
  );
};

export default PagoComponent;
