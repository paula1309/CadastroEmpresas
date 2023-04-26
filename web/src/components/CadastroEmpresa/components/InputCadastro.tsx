interface InputCadastroProps{
  title: string,
  type: string,
  id: string,
  placeholder: string
}

export default function InputCadastro({title, type, id, placeholder}: InputCadastroProps){
  return(
    <label htmlFor={id} className="text-white text-lg flex flex-col items-start">
      {title}
      <input
        className="border border-solid border-sky-800 p-2 h-9 rounded w-full"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </label>
  )
}