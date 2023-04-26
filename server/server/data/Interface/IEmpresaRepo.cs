using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace data.Interface
{
    public interface IEmpresaRepo
    {
        public List<DTO.Empresa> ListAllCompanies();
        public dynamic SearchSuppliersByCompany(Guid id);
        public Guid CreateCompany(DTO.Empresa empresa);
        public Guid UpdateCompany(DTO.Empresa empresa);
        public Guid DeleteCompany(Guid id);

    }
}
