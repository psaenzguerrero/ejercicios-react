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
// import { useState } from "react"
// import Contador from "./componentes/Contador"

// function App() {

//   return (
//     <>
//       <Contador/>
//     </>
//   )
// }
// export default App
// EJ 8
// import { useState } from "react"
// import { Buscador } from "./componentes/Buscador"
// function App() {
//   let [palabra, setpalabra] = useState("")
//   let lidefault = ["123","1234","5678","6789","9012"];
//   let guardar=(palabra)=>{
//     setpalabra(palabra);
//   }
//   return (
//     <>
//       <Buscador guardar={(palabra)=>guardar(palabra)}/>
//       <ul>
//         {
//           lidefault.map((jose,index)=>{
//             return(
//               jose.includes(palabra) ?  <li key={index}>{jose}</li> : "" 
//             )
//           })
//         }
//       </ul>
//     </>
//   )
// }
// export default App
//EJ 9
// import { useState } from "react"
// import { Opciones } from "./componentes/Opciones"
// function App() {
//   const [valor, setvalor] = useState("");
//   let valores=(valor)=>{
//     setvalor(valor);

//   }
  
//   return (
//     <>
//       <Opciones valor={valores}/>
//       <h1>
//         {
//         valor === "1" ? "hola1" : ""
//         }
//         {
//         valor === "2" ? "hola2" : ""
//         }
//         {
//         valor === "3" ? "hola3" : ""
//         }
//         {
//         valor === "4" ? "hola4" : ""
//         }
//         {
//         valor === "5" ? "hola5" : ""
//         }
//       </h1>
    
//     </>
//   )
// }
// export default App
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Plantilla from "./layout/Plantilla"
import Ejer1 from "./pages/Ejer1"
import Ejer2 from "./pages/Ejer2"
import Ejer3 from "./pages/Ejer3"

function App() {
  
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plantilla/>} >
          <Route index element={<Ejer1/>}></Route>
          <Route path="/Ejer2" element={<Ejer2/>}></Route>
          <Route path="/Ejer3" element={<Ejer3/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App
