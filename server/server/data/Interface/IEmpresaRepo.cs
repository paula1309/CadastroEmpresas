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

        public Guid CreateCompany(DTO.Empresa empresa);
        public Guid UpdateCompany(DTO.Empresa empresa);
        public void DeleteCompany(Guid id);

    }
}
