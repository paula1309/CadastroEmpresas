import { FormEvent, useEffect, useState } from "react";
import InputCadastro from "./components/InputCadastro";
import ListCadastro from "./components/ListCadastro";
import SelectCadastro from "./components/SelectCadastro";
import { api } from "../../lib/axios";
import Header from "../Header";

export interface Empresa{
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

type Cep = {
  cep: string,
  uf: string,
  cidade: string,
  bairro: string,
  logradouro: string,
}

export default function CadastroEmpresa(){
  const [fornecedores, setFornecedores] = useState<Fornecedores[]>([]);
  const [nameValue, setName] = useState<string>("");
  const [cnpjValue, setCnpj] = useState<string>("");
  const [cepValue, setCepValue] = useState<string>("");
  const [cep, setCep] = useState<Cep>({
    cep: "",
    uf: "",
    cidade: "",
    bairro: "",
    logradouro: ""
  });
  const [lsFornecedor, setLsFornecedor] = useState<string[]>([""]);
  const [valueSelect, setValueSelect] = useState<string>("");

  // Listar Fornecedores escolhidos
  function handleLsFornecedores() {
    const newFornecedor = [...lsFornecedor, valueSelect]
    const filterFornecedor = newFornecedor.filter((item, index)=> newFornecedor.indexOf(item) === index);

    setLsFornecedor(filterFornecedor);
       
  }

  // Pegar o endereço do cep digitado
  async function handleCepClick() {
    const response = await fetch('http://cep.la/' + cepValue, {
        headers: {"Accept":"application/json"}
    });
    
    const cepResponse = await response.json();

    setCep(cepResponse);
    
  }

  // Criar empresa nova
  async function handleFormSubmit(event: FormEvent){
    event.preventDefault();
    
    try{
      const response = await api.post("/CriarNovaEmpresa", {
        NomeFantasia: nameValue,
        Cnpj: cnpjValue,
        Cep: cepValue
      });
      console.log({response});
      
    }catch(ex){
      console.log(ex);
    }

    // Falta a lista de fornecedores
    
  }

  // Listar Fornecedores no Select
  async function getSuppliers(){
    try{
      const response = await api.get("/listarTodosFornecedores");

      setFornecedores(response.data);
      
    }catch(ex){
      console.log(ex);
      
    }
  }

  // Pegar os valores dos inputs
  function HandleInputChange(id: string, value: string){
    switch(id){
      case 'name': setName(value); break;
      case 'cnpj': setCnpj(value); break;
      case 'cep': setCepValue(value); break;
      default: console.log("erro interno");
    }
  }

  useEffect(()=>{
    getSuppliers(); 
    
  },[]);

  return(
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="bg-sky-500 box-border mt-4 p-4 w-1/2 rounded-md items-center">
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
            handleInputChange={HandleInputChange}
          />
          <InputCadastro
            title="CNPJ"
            type="text"
            id="cnpj"
            placeholder="Coloque seu CNPJ"
            inputEnabled={false}
            handleInputChange={HandleInputChange}
          />
          <div className="flex">
            <InputCadastro
              title="Cep"
              type="text"
              id="cep"
              placeholder="Ex.: 12345-678"
              inputEnabled={false}
              handleInputChange={HandleInputChange}
            />
            <button
            type="button"
              className="bg-sky-800 self-end rounded-r h-[36px] text-white w-[80px]"
              onClick={()=>handleCepClick()}
            >Adicionar</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputCadastro
              title="Logradouro"
              type="text"
              id="logradouro"
              placeholder="Ex.: Rua Lima"
              inputEnabled={true}
              value={cep.logradouro}
            />
            <InputCadastro
              title="Bairro"
              type="text"
              id="bairro"
              placeholder="Ex.: Jardim Miranda"
              inputEnabled={true}
              value={cep.bairro}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputCadastro
              title="Cidade"
              type="text"
              id="cidade"
              placeholder="Ex.: Itaguacetuba"
              inputEnabled={true}
              value={cep.cidade}
            />
            <InputCadastro
              title="Estado"
              type="text"
              id="estado"
              placeholder="Ex.: Rio de Janeiro"
              inputEnabled={true}
              value={cep.uf}
            />
          </div>

          <div className="grid grid-cols-6">
            <SelectCadastro
              fornecedores={fornecedores}
              setValueSelect={setValueSelect}
            />
            <button
              type="button"
              className="bg-sky-800 self-end rounded-r h-[36px] text-white w-full"
              onClick={() => handleLsFornecedores()}
            >+</button>
          </div>

          <ListCadastro fornecedor={lsFornecedor} />
          
          <button
            className="bg-sky-800 self-end rounded h-1/2 mt-4 text-white w-1/4"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
    

  )
}