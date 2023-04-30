import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { Fornecedores } from "..";

interface SelectCadastroProps{
  fornecedores: Fornecedores[],
  setValueSelect: Dispatch<SetStateAction<string>>,
}

export default function SelectCadastro({fornecedores, setValueSelect}: SelectCadastroProps){
  const [selectedItem, setSelectedItem] = useState<string>("");

  //Pegar o valor do Select
  function handleSelectChange(e: FormEvent){
    const value = (e.target as HTMLSelectElement).value;

    if(value === "selecione um fornecedor"){
      return setSelectedItem("");
    }
    setSelectedItem(value);
  }

  useEffect(() => {
    setValueSelect(selectedItem); 
    
  }, [selectedItem])
  

  return(
    <label className="text-white text-lg flex flex-col items-start col-span-5">
      Fornecedores
      <select
        className="border border-solid border-sky-800 h-9 rounded-l w-full text-sky-800"
        defaultValue={selectedItem}
        onChange={handleSelectChange}
      >
      <option>
        selecione um fornecedor
      </option>
      {fornecedores?.map((item) => (
        <option
          key={item.id + item.nome}
          value={item.nome}
        >
          {item.nome}
        </option>
      ))}
      </select>
    </label>
  )
}