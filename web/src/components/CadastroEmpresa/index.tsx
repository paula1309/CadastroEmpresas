import InputCadastro from "./components/InputCadastro";
import ListCadastro from "./components/ListCadastro";
// import { useForm } from "react-hook-form";
import SelectCadastro from "./components/SelectCadastro";

export interface Fornecedores{
  id: string,
  nome: string,
  cnpjCpf: string,
  cep: string,
  rg?: string,
  dataNascimento?: string
}

// interface DataUser {
//   name: string;
//   email: string;
//   position: string;
//   talentCommunity: string;
//   isAllocate: boolean;
// }

export default function CadastroEmpresa(){
  // const {
  //   getValues,
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<DataUser>();

  //const onSubmit = async (data: DataUser) => {
    // const emailUser = getValues('email');
    // localStorage.setItem('@hives-email', data.email);
    
    // const hasEmail = await validateEmail(emailUser);

    // if (hasEmail) {
    //   setEmailErro(true);
    //   return;
    //}

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
    
    // onSubmit={handleSubmit(onSubmit)}

  return(
    <div className="bg-sky-500 box-border p-4 w-1/2 rounded-md items-center">
      <form>
        {/* Título */}
        <div className="pb-5">
          <h1 className="text-sky-800 text-[32px] font-bold text-center">Cadastre sua empresa</h1>
        </div>
        {/* Campos de entrada - Input */}
        <InputCadastro title="Nome Fantasia" type="text" id="name" placeholder="Coloque o nome da empresa" />
        <InputCadastro title="CNPJ" type="text" id="cnpj" placeholder="Coloque seu CNPJ" />
        <InputCadastro title="Cep" type="text" id="cep" placeholder="Ex.: 12345-678"/>
        <div className="grid grid-cols-2 gap-3">
          <InputCadastro title="Logradouro" type="text" id="logradouro" placeholder="Ex.: Rua Lima, 32"/>
          <InputCadastro title="Bairro" type="text" id="bairro" placeholder="Ex.: Jardim Miranda"/>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <InputCadastro title="Cidade" type="text" id="cidade" placeholder="Ex.: Itaguacetuba"/>
          <InputCadastro title="Estado" type="text" id="estado" placeholder="Ex.: Rio de Janeiro"/>
        </div>

        <div className="grid grid-cols-6">
          <SelectCadastro fornecedores={fornecedorData} />
          <button className="bg-sky-800 self-end rounded-r h-[36px] text-white w-full">+</button>
        </div>

        <ListCadastro fornecedor={fornecedorData} />
        
        <button className="bg-sky-800 self-end rounded h-1/2 mt-4 text-white w-1/4">Salvar</button>
      </form>
    </div>

  )
}