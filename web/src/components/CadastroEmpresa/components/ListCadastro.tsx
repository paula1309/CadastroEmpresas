interface ListCadastroProps{
  fornecedor: string[],
}

export default function ListCadastro({fornecedor}: ListCadastroProps){
  return(
    <div className="bg-sky-100 my-4 rounded-md">
      {fornecedor.map(item => {
        return(
          <span key={item} className="flex flex-col py-2 px-6 items-start">
            {item}
          </span>
        )
      })}
    </div>
  )
}