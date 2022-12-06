import './card.css';

import {useState, useEffect } from "react";

function Api() {

    const  [filtro, setFiltro] = useState('')

    
    const  [personajes, setPersonajes] = useState([]);

    const urlInicial = 'https://rickandmortyapi.com/api/character'
    useEffect(()=> {
    
    obtenerInformacion (urlInicial);
       
    }, []);  
    
    const obtenerInformacion =  (url) =>{
      fetch (url)
        .then(response=>response.json())  
        .then(datos=> setPersonajes(datos.results))
        .catch(error=> console.log(error))
    }
    
    return(
        <main>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <div className="container-fluid">
                    <a className="navbar-brand container">Rick and Morty</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
                                onChange={(e) => setFiltro (e.target.value)}>
                            </input>
                        
                        </form>
                </div>
            </nav>
        </header>        
        <div className="container">
            <div className="row row2 ">
        
                {personajes.sort((a, b)=> a.name > b.name).filter((per)=>per.name.toLowerCase().includes(filtro)).map((personaje) => (
                    <div key={personaje.id} className="col carta">
                        <div className="card  " style={{minWidth: "200px"}}></div>
                        <img  src={personaje.image}></img>
                        <div className="card-body">
                        
                            <h4 className="card-title">{personaje.name}</h4>
                            <hr/>
                            <h5 className="card-title">Estatus:{personaje.status}</h5>
                            <h5 className="card-title">Especie:{personaje.species}</h5>
                            
                        </div>
                    </div>
    ))}
        
            </div>
        </div>
        </main>
    );
    
}

export default Api; 