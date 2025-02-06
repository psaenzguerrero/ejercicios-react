// EJER 1
// import { useState } from "react"
// import Boton from "./componentes/Boton"
// function App() {
//   let [numero, setNumero] = useState(0);
//   const [estado, setEstado] = useState(true);
//   let cambiar =(estado)=>{
//     setEstado(estado);
//     if (estado) {
//       numero+=1;
//       setNumero(numero);
//     }else{
//       numero-=1;
//       setNumero(numero);
//     }
//   }
//   return (
//     <>
//       <p>{numero}</p>
//       <Boton variable={cambiar}/>
//     </>
//   )
// }
// export default App

// EJER 2
// import { useState } from "react"
// import Listas from "./componentes/Listas";
// function App() {
  
//   const [estado, setEstado] = useState(true);
//   let cambiar =(estado)=>{
//     setEstado(estado);
    
//   };
        

//   const [tareas, setTareas] = useState([])
//   let crearLi=(palabra)=>{
//     setTareas([...tareas, palabra]);
//   }
//   const eliminarTarea = (index) => {
//     const updatedTareas = tareas.filter((jose,tareaIndex) => tareaIndex !== index);
//     setTareas(updatedTareas); // Actualizamos el estado
//   };

  
//   return (
//     <>
//       <h1>{estado ? "Completado" : "Incompleto"}</h1>
//       <Listas agregar={crearLi} cambio={cambiar}/>
      
//       <ul>
//         {
//           tareas.map((tarea,index)=>{
//             return(
//               <li key={index}>{tarea}<button onClick={()=>eliminarTarea(index)}>Eliminar</button></li>
//             )
//           })
//         }
//       </ul>
//     </>
//   )
// }
// export default App
//EJE 7
import { useState } from "react"
import Contador from "./componentes/Contador"

function App() {

  return (
    <>
      <Contador/>
    </>
  )
}
export default App
