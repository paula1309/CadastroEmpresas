import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Fornecedores } from "..";

interface SelectCadastroProps{
  fornecedores: Fornecedores[] | undefined,
  setValueSelect: Dispatch<SetStateAction<string | undefined>>,
}

export default function SelectCadastro({fornecedores, setValueSelect}: SelectCadastroProps){
  const [selectedItem, setSelectedItem] = useState<string | undefined>("");

  useEffect(() => {
    setValueSelect(selectedItem); 
    
  }, [selectedItem])
  

  return(
    <label className="text-white text-lg flex flex-col items-start col-span-5">
      Fornecedores
      <select
        className="border border-solid border-sky-800 h-9 rounded-l w-full text-sky-800"
        defaultValue={selectedItem}
        onChange={e => setSelectedItem(e.target.value)}
      >
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