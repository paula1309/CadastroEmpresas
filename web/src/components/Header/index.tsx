import Button from "./components/Button";

export default function Header(){


  return(
    <div className="bg-sky-500 w-full">
      <nav>
        <Button title="Lista de Empresas" route="/" />
        <Button title="Cadastro de Empresa" route="/cadastroEmpresa" />
    </nav>
    </div>
    
  )
}