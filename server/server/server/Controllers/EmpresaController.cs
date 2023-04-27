using data.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace server.Controllers
{
    public class EmpresaController : Controller
    {
        private readonly IEmpresaRepo _empresaRepo;

        public EmpresaController(IEmpresaRepo empresaRepo)
        {
            _empresaRepo = empresaRepo;
        }

        [HttpGet]
        [Route("/listarTodasEmpresas")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult ListAllCompanies()
        {
            try
            {
                return Ok(_empresaRepo.ListAllCompanies());
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("/listarFornecedoresPorEmpresa")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult ListSuppliersByCompany(Guid id)
        {
            try
            {
                return Ok(_empresaRepo.SearchSuppliersByCompany(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("/CriarNovaEmpresa")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult CreateNewCompany(data.DTO.Empresa empresa)
        {
            try
            {
                return Ok(_empresaRepo.CreateCompany(empresa));
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("/AtualizarEmpresa")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateCompany(data.DTO.Empresa empresa)
        {
            try
            {
                return Ok(_empresaRepo.UpdateCompany(empresa));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("/ApagarEmpresa")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult DeleteCompany(Guid id)
        {
            try
            {
                return Ok(_empresaRepo.DeleteCompany(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
