import { Dispatch, SetStateAction} from "react";
import { Empresa } from "..";

interface InputCadastroProps{
  title: string,
  type: string,
  id: string,
  placeholder: string,
  inputEnabled: boolean,
  value?: string,
  setData: Dispatch<SetStateAction<Empresa>>
}

export default function InputCadastro({title, type, id, placeholder, inputEnabled, value, setData}: InputCadastroProps){



  return(
    <label htmlFor={id} className="text-lg flex flex-col items-start">
      <span className="text-white">{title}</span>
      <input
        disabled={inputEnabled}
        className="border border-solid border-sky-800 p-2 h-9 rounded w-full"
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </label>
  )
}