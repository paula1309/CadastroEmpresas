import Header from "../Header";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Empresa{
  nomeFantasia: string,
  cnpj: string,
  cep: string,
}

type Cep = {
  cep: string,
  uf: string,
  cidade: string,
  bairro: string,
  logradouro: string,
}

export default function ListaEmpresa(){
  const [empresa, setEmpresas] = useState<Empresa[]>([]);
  const [cep, setCep] = useState<Cep>({
    cep: "",
    uf: "",
    cidade: "",
    bairro: "",
    logradouro: ""
  });

  // Apagar Empresa
  async function handleCompanyDeletion(){
    try{
      const response = await api.delete("/ApagarEmpresa");

      setEmpresas(response.data);
      
    }catch(ex){
      console.log(ex);
      
    }
  }

  // Listar Empresa
  async function getCompanies(){
    try{
      const response = await api.get("/listarTodasEmpresas");

      setEmpresas(response.data);
      
    }catch(ex){
      console.log(ex);
      
    }
  }

  const cepNumero = "65081264";

  async function getCompanyAddress() {
    const response = await fetch('http://cep.la/' + cepNumero, {
        headers: {"Accept":"application/json"}
    });
    
    const cepResponse = await response.json();

    setCep(cepResponse);
    
  }

  useEffect(() => {
    getCompanies();
    getCompanyAddress();
  }, [])

  return(
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center">
        <table className="table-fixed w-3/4 bg-sky-500 box-border mt-4 p-4 rounded-md items-center text-white">
          <thead className="bg-sky-800">
            <tr>
              <th>Empresa</th>
              <th>CNPJ</th>
              <th>Cep</th>
              <th>Endereço</th>
              <th>Fornecedores</th>
              <th>Editar</th>
              <th>Apagar</th>
            </tr>
          </thead>
          <tbody>
            {empresa?.map((data) => (
              <tr key={data.cnpj}>
                <td>
                  {data.nomeFantasia}
                </td>
                <td>
                  {data.cnpj}
                </td>
                <td>
                  {data.cep}
                </td>
                <td>
                  {cep.logradouro + " " + cep.bairro + " - " + cep.cidade + "/" + cep.uf}
                </td>
                <td>
                <button
                    className="bg-sky-200 m-4 p-2 rounded font-bold text-sky-800"
                  > Ver Lista </button>
                </td>
                <td>
                  <button
                    className="bg-sky-200 m-4 p-2 rounded font-bold text-sky-800"
                  > Editar </button>
                </td>
                <td>
                  <button
                    className="bg-sky-200 m-4 p-2 rounded font-bold text-sky-800"
                    onClick={handleCompanyDeletion}
                  > Apagar </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}