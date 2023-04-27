import { FormEvent, useState } from "react";
import InputCadastro from "./components/InputCadastro";
import ListCadastro from "./components/ListCadastro";
import SelectCadastro from "./components/SelectCadastro";
//import { api } from "../../lib/axios";
//import {v4 as uuidv4} from "uuid";

export interface Empresa{
  id: string,
  nome: string,
  cnpj: string,
  cep: string,
}

export interface Fornecedores{
  id: string,
  nome: string,
  cnpjCpf: string,
  cep: string,
  rg?: string,
  dataNascimento?: string
}

export default function CadastroEmpresa(){
  const [cadastroEmpresa, setCadastroEmpresa] = useState<Empresa>({} as Empresa);

  // const handleChange = () => {

  // }
    
  async function handleFormSubmit(event: FormEvent){
    event.preventDefault();

    console.log(event.target);
    console.log(cadastroEmpresa);
    

    // await api.post("/CriarNovaEmpresa", {
    //   idEmpresa: uuidv4(),
    //   nomeFantasia: "Geração Coca-Cola",
    //   cnpj: "33391711000193",
    //   cep: "16200053"
    // });
  }  

  const fornecedorData = [
    {
      id: "1",
      nome: "Paula teste 1",
      cnpjCpf: "12345678901234",
      cep: "1234567-890"
    },
    {
      id: "1",
      nome: "Paula teste 2",
      cnpjCpf: "12345678901",
      cep: "1234567-890",
      rg: "123456789",
      dataNascimento: "1999-02-02"
    }
  ]

  return(
    <div className="bg-sky-500 box-border p-4 w-1/2 rounded-md items-center">
      <form onSubmit={handleFormSubmit}>
        {/* Título */}
        <div className="pb-5">
          <h1 className="text-sky-800 text-[32px] font-bold text-center">Cadastre sua empresa</h1>
        </div>
        {/* Campos de entrada - Input */}
        <InputCadastro
          title="Nome Fantasia"
          type="text"
          id="name"
          placeholder="Coloque o nome da empresa"
          inputEnabled={false}
          setData={setCadastroEmpresa}
        />
        <InputCadastro
          title="CNPJ"
          type="text"
          id="cnpj"
          placeholder="Coloque seu CNPJ"
          inputEnabled={false}
          setData={setCadastroEmpresa}
        />
        <InputCadastro
          title="Cep"
          type="text"
          id="cep"
          placeholder="Ex.: 12345-678"
          inputEnabled={false}
          setData={setCadastroEmpresa}
        />
        <div className="grid grid-cols-2 gap-3">
          <InputCadastro
            title="Logradouro"
            type="text"
            id="logradouro"
            placeholder="Ex.: Rua Lima"
            inputEnabled={true}
            setData={setCadastroEmpresa}
          />
          <InputCadastro
            title="Bairro"
            type="text"
            id="bairro"
            placeholder="Ex.: Jardim Miranda"
            inputEnabled={true}
            setData={setCadastroEmpresa}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <InputCadastro
            title="Cidade"
            type="text"
            id="cidade"
            placeholder="Ex.: Itaguacetuba"
            inputEnabled={true}
            setData={setCadastroEmpresa}
          />
          <InputCadastro
            title="Estado"
            type="text"
            id="estado"
            placeholder="Ex.: Rio de Janeiro"
            inputEnabled={true}
            setData={setCadastroEmpresa}
          />
        </div>

        <div className="grid grid-cols-6">
          <SelectCadastro fornecedores={fornecedorData} />
          <button className="bg-sky-800 self-end rounded-r h-[36px] text-white w-full">+</button>
        </div>

        <ListCadastro fornecedor={fornecedorData} />
        
        <button
          className="bg-sky-800 self-end rounded h-1/2 mt-4 text-white w-1/4"
          type="submit"
        >
          Salvar
        </button>
      </form>
    </div>

  )
}