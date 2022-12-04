import { useState } from "react";
import './App.css';


function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    setRegalos([...regalos, nuevoRegalo])
    setNuevoRegalo("")
  }
  const handleClick = (regaloBorrado) => {
    setRegalos(regalos.filter(regalo => regalo !== regaloBorrado))
  }
  const [regalos, setRegalos] = useState(["Tránsitos para gatitos", "Helado proteico", "Plantas"]);
  let lista = regalos.map((regalo) => <li> {regalo} <button onClick={() => handleClick(regalo)}> x </button> </li>)
  const [nuevoRegalo, setNuevoRegalo] = useState()
  const handleChange = (e) => setNuevoRegalo (e.target.value)

  return (
    <div className="App">
      <div className='vid'>
       <video loop autoPlay muted>
          <source src="video.mp4" type="video/mp4" />
          </video>
          </div>
        <div className="Regalos">
        <h1>Regalos</h1>
        <form onSubmit={handleSubmit}>
          <input value={nuevoRegalo} onChange={handleChange} />
          <button className="Boton">Agregar regalo</button>
        </form>
        {lista}
          </div>
    </div>
  );
}

export default App;
