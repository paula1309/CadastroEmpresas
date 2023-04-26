using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace data.Interface
{
    public interface IFornecedorRepo
    {
        public List<DTO.Fornecedor> ListAllSuppliers();
        public Guid CreateSupplier(DTO.Fornecedor fornecedor);
        public Guid UpdateSupplier(DTO.Fornecedor fornecedor);
        public void DeleteSupplier(Guid id);
    }
}
