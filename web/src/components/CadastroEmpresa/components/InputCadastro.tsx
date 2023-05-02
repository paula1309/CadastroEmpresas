import { Dispatch, FormEvent, SetStateAction} from "react";
import { Empresa } from "..";

interface InputCadastroProps{
  title: string,
  type: string,
  id: string,
  placeholder: string,
  inputEnabled: boolean,
  value?: string,
  handleInputChange?: any; // (id: string, value: string) => void
}

export default function InputCadastro({title, type, id, placeholder, inputEnabled, value, handleInputChange}: InputCadastroProps){
  // const [nameValue, setName] = useState<string>("");
  // const [cnpjValue, setCnpj] = useState<string>("");
  // const [cepValue, setCep] = useState<string>("");

  function HandleInputChange(e: FormEvent){
    const inputValue = (e.target as HTMLInputElement).value;

    handleInputChange(id, inputValue);
  }
  


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
        onChange={HandleInputChange}
      />
    </label>
  )
}