import { Fornecedores } from "..";

interface SelectCadastroProps{
  fornecedores: Fornecedores[],
}

export default function SelectCadastro({fornecedores}: SelectCadastroProps){
  return(
    <label className="text-white text-lg flex flex-col items-start col-span-5">
      Fornecedores
      <select
      placeholder="Fornecedores"
      className="border border-solid border-sky-800 h-9 rounded-l w-full text-sky-800"
    >
    {fornecedores.map((item) => (
      <option key={item.id + item.nome} value={item.nome}>
        {item.nome}
      </option>
    ))}
    </select>
    </label>
  )
}