using data.Context;
using data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace data.Repository
{
    public class EmpresaRepo : IEmpresaRepo
    {
        private readonly CadastroContext _context;

        public EmpresaRepo(CadastroContext context)
        {
            _context = context;
        }
        public List<DTO.Empresa> ListAllCompanies()
        {
            return (from empresas in _context.Empresas
                    select new DTO.Empresa()
                    {
                        IdEmpresa    = empresas.IdEmpresa,
                        Cnpj         = empresas.Cnpj,
                        NomeFantasia = empresas.NomeFantasia,
                        Cep          = empresas.Cep,
                        IdFornecedor = (ICollection<DTO.Fornecedor>) empresas.IdFornecedor

                    }).ToList();
        }

        public Guid CreateCompany(DTO.Empresa empresa)
        {
            Entity.Empresa empresaEntity = new Entity.Empresa()
            {
                Cnpj         = empresa.Cnpj,
                NomeFantasia = empresa.NomeFantasia,
                Cep          = empresa.Cep,
                IdFornecedor = (ICollection<Entity.Fornecedor>) empresa.IdFornecedor
            };

            _context.ChangeTracker.Clear();
            _context.Add(empresaEntity);
            _context.SaveChanges();

            return empresaEntity.IdEmpresa;

        }

        public Guid UpdateCompany(DTO.Empresa empresa)
        {
            Entity.Empresa empresaEntity = _context.Empresas
                .FirstOrDefault(w => w.IdEmpresa == empresa.IdEmpresa) ?? new Entity.Empresa();

            if (empresa.Cnpj != null || !String.IsNullOrEmpty(empresa.Cnpj))
            {
                empresaEntity.Cnpj = empresa.Cnpj;
            }

            if (empresa.NomeFantasia != null || !String.IsNullOrEmpty(empresa.NomeFantasia))
            {
                empresaEntity.NomeFantasia = empresa.NomeFantasia;
            }

            if (empresa.Cep != null || !String.IsNullOrEmpty(empresa.Cep))
            {
                empresaEntity.Cep = empresa.Cep;
            }

            if (empresa.IdFornecedor != null)
            {
                empresaEntity.IdFornecedor = (ICollection<Entity.Fornecedor>)empresa.IdFornecedor;
            }

            _context.ChangeTracker.Clear();
            _context.Update(empresaEntity);
            _context.SaveChanges();

            return empresaEntity.IdEmpresa;
        }

        public void DeleteCompany(Guid id) 
        {
            Entity.Empresa empresaEntity = _context.Empresas
                .FirstOrDefault(w => w.IdEmpresa == id) ?? new Entity.Empresa();

            _context.ChangeTracker.Clear();
            _context.Remove(empresaEntity);
            _context.SaveChanges();
        }
    }
}
