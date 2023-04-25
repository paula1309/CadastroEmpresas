using System;
using System.Collections.Generic;

namespace data.Entity;

public partial class Fornecedor
{
    public Guid IdFornecedor { get; set; }

    public string CnpjCpf { get; set; } = null!;

    public string Nome { get; set; } = null!;

    public string? Rg { get; set; }

    public DateTime? DataNascimento { get; set; }

    public string Cep { get; set; } = null!;

    public virtual ICollection<Empresa> IdEmpresas { get; set; } = new List<Empresa>();
}
