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
      {fornecedor.map(item => {
        return(
          <span key={item} className="flex flex-col py-2 px-6 items-start">
            {item ? item : <p>Não há fornecedores para essa empresa, adicione!!</p>}
          </span>
        )
      })}
    </div>
  )
}