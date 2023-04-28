using data.Context;
using data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace data.Repository
{
    public class FornecedorRepo : IFornecedorRepo
    {
        private readonly CadastroContext _context;

        public FornecedorRepo(CadastroContext context)
        {
            _context = context;
        }
        public List<DTO.Fornecedor> ListAllSuppliers()
        {
            return (from fornecedores in _context.Fornecedores
                    select new DTO.Fornecedor()
                    {
                        IdFornecedor = fornecedores.IdFornecedor,
                        CnpjCpf = fornecedores.CnpjCpf,
                        Nome = fornecedores.Nome,
                        Cep = fornecedores.Cep,
                    }).ToList();
        }

        public dynamic SearchClientsBySupplier(Guid id)
        {
            return (from fornecedores in _context.Fornecedores
                    select fornecedores.IdEmpresas);
        }

        public Guid CreateSupplier(DTO.Fornecedor fornecedor)
        {
            Entity.Fornecedor fornecedorEntity = new Entity.Fornecedor();
            fornecedorEntity.CnpjCpf = fornecedor.CnpjCpf;
            fornecedorEntity.Nome= fornecedor.Nome;
            fornecedorEntity.Cep= fornecedor.Cep;

            if (fornecedor.CnpjCpf.Length == 11)
            {
                fornecedorEntity.Rg = fornecedor.Rg;
                fornecedorEntity.DataNascimento = fornecedor.DataNascimento;
            }

            _context.ChangeTracker.Clear();
            _context.Add(fornecedorEntity);
            _context.SaveChanges();

            return fornecedorEntity.IdFornecedor;

        }

        public Guid UpdateSupplier(DTO.Fornecedor fornecedor)
        {
            Entity.Fornecedor fornecedorEntity = _context.Fornecedores
                .FirstOrDefault(w => w.IdFornecedor == fornecedor.IdFornecedor) ?? new Entity.Fornecedor();

            if (fornecedor.CnpjCpf != null || !String.IsNullOrEmpty(fornecedor.CnpjCpf))
            {
                fornecedorEntity.CnpjCpf = fornecedor.CnpjCpf;
            }

            if (fornecedor.Nome != null || !String.IsNullOrEmpty(fornecedor.Nome))
            {
                fornecedorEntity.Nome = fornecedor.Nome;
            }

            if (fornecedor.Cep != null || !String.IsNullOrEmpty(fornecedor.Cep))
            {
                fornecedorEntity.Cep = fornecedor.Cep;
            }

            if (fornecedor.IdEmpresas != null)
            {
                fornecedorEntity.IdEmpresas = (ICollection<Entity.Empresa>)fornecedor.IdEmpresas;
            }

            _context.ChangeTracker.Clear();
            _context.Update(fornecedorEntity);
            _context.SaveChanges();

            return fornecedorEntity.IdFornecedor;
        }

        public Guid DeleteSupplier(Guid id)
        {
            Entity.Fornecedor fornecedorEntity = _context.Fornecedores
                .FirstOrDefault(w => w.IdFornecedor == id) ?? new Entity.Fornecedor();

            _context.ChangeTracker.Clear();
            _context.Remove(fornecedorEntity);
            _context.SaveChanges();

            return fornecedorEntity.IdFornecedor;
        }
    }
}
