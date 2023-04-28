import Header from "../Header";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Empresa{
  nomeFantasia: string,
  cnpj: string,
  cep: string,
}

export default function ListaEmpresa(){
  const [empresa, setEmpresas] = useState<Empresa[]>();

  const companyData  = [
    {
      nomeFantasia: "Paula's Company",
    },
    {
      nomeFantasia: "Jose da Silva Company"
    }
  ]

  async function getCompanies(){
    try{
      const response = await api.get("/listarTodasEmpresas");

      setEmpresas(response.data);
      
    }catch(ex){
      console.log(ex);
      
    }
  }

  useEffect(() => {
    getCompanies();
  }, [])

  return(
    <div className="w-full flex flex-col items-center">
      <Header />
      <div>
        <table className="table-auto bg-sky-500 box-border mt-4 p-4 rounded-md items-center">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {empresa?.map((data) => (
              <tr key={data.cnpj}>
                <td>
                  {data.nomeFantasia}
                </td>
                <td>
                  <button> Editar </button>
                </td>
                <td>
                  <button> Apagar </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}