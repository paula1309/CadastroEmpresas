using data.Interface;
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
                return Ok(ListAllCompanies());
            }catch(Exception ex)
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
                return Ok(CreateNewCompany(empresa));
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
                return Ok(UpdateCompany(empresa));
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
                return Ok(DeleteCompany(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
