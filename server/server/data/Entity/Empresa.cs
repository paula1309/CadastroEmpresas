using System;
using System.Collections.Generic;

namespace data.Entity;

public partial class Empresa
{
    public Guid IdEmpresa { get; set; }

    public string Cnpj { get; set; } = null!;

    public string? NomeFantasia { get; set; }

    public string Cep { get; set; } = null!;

    public virtual ICollection<Fornecedor> IdFornecedor { get; set; } = new List<Fornecedor>();
}
