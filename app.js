import React from 'react';
import CarWidget from './CarWidget.js';

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">Inicio</li>
                    <li className="nav-item">Nosotros</li>
                    <li className="nav-item">Contacto</li>
                    <li className="nav-item"><CarWidget /></li>
                </ul>
            </nav>
        </div>
    );
}
<div class="card">
<img src="# " className="card-img-top" alt="Car Icon"> 
{/* no puedo poner la imagen */}
<div class="card-body">
    <h5 class="card-title">Car Widget</h5>
    <p class="card-text">Total cars: <span class="badge badge-primary">10</span></p>
</div>
</div>
export default App;