import CadastroEmpresa from "../CadastroEmpresa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpresa from "../ListaEmpresa";

export default function Main(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ListaEmpresa}/>
        <Route path="/cadastroEmpresa" Component={CadastroEmpresa} />
      </Routes> 
    </BrowserRouter>
  )
}