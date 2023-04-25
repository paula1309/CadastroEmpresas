using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace server.Controllers
{
    public class EmpresaController : Controller
    {
        [HttpGet]
        [Route("/listarTodasEmpresas")]
        public IActionResult ListAllCompanies()
        {
            return Ok();
        }

        [HttpPost]
        [Route("/CriarNovaEmpresa")]
        public IActionResult CreateNewCompany()
        {
            return Ok();
        }

        [HttpPut]
        [Route("/AtualizarEmpresa")]
        public IActionResult UpdateCompany()
        {
            return Ok();
        }

        [HttpDelete]
        [Route("/ApagarEmpresa")]
        public IActionResult DeleteCompany()
        {
            return Ok();
        }

    }
}
