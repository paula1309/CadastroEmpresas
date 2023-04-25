using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    public class FornecedorController : Controller
    {

        [HttpGet]
        [Route("/listarTodosFornecedores")]
        public IActionResult ListAllSuppliers()
        {
            return Ok();
        }

        [HttpPost]
        [Route("/CriarNovoFornecedor")]
        public IActionResult CreateNewSupplier()
        {
            return Ok();
        }

        [HttpPut]
        [Route("/AtualizarFornecedor")]
        public IActionResult UpdateSupplier()
        {
            return Ok();
        }

        [HttpDelete]
        [Route("/ApagarFornecedor")]
        public IActionResult DeleteSupplier()
        {
            return Ok();
        }
    }
}
