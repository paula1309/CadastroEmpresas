import { Dispatch, SetStateAction } from "react";
import { Empresa } from "..";

interface InputCadastroProps{
  title: string,
  type: string,
  id: string,
  placeholder: string,
  inputEnabled: boolean
  setData: Dispatch<SetStateAction<Empresa>>
}

export default function InputCadastro({title, type, id, placeholder, inputEnabled, setData}: InputCadastroProps){
  var xhr = new XMLHttpRequest();
    xhr.open ("GET", "http://cep.la/06700227", true);
    xhr.setRequestHeader ("Accept", "application/json");
    xhr.onreadystatechange = function(){
      if((xhr.readyState === 0 || xhr.readyState === 4) && xhr.status === 200)
        console.log(xhr.responseText);
    };
    xhr.send (null);

  return(
    <label htmlFor={id} className="text-lg flex flex-col items-start">
      <span className="text-white">{title}</span>
      <input
        disabled={inputEnabled}
        className="border border-solid border-sky-800 p-2 h-9 rounded w-full"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </label>
  )
}