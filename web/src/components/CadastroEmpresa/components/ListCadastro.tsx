interface ListCadastroProps{
  fornecedor: string[],
}

export default function ListCadastro({fornecedor}: ListCadastroProps){
  return(
    <div className="bg-sky-100 my-4 rounded-md">
      <div>
        <label>
          Filtrar Fornecedor Por:
          <input type="checkbox" id="checkbox" />
          <span>Nome</span>
          <input type="checkbox" id="checkbox" />
          <span>Cnpj/CPF</span>
          <input type="text" />
        </label>
      </div>
      {fornecedor.length === 1 ? 
        <p className="flex flex-col py-2 px-6 items-start">Não há fornecedores para essa empresa, adicione!!</p>
        : 
        fornecedor.map((item,index) => {
        return(
          <span key={index} className="flex flex-col py-2 px-6 items-start">
            {item}
          </span>
        )
      })}
    </div>
  )
}