using data.Interface;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    public class FornecedorController : Controller
    {
        private readonly IFornecedorRepo _fornecedorRepo;

        public FornecedorController(IFornecedorRepo fornecedorRepo)
        {
            _fornecedorRepo = fornecedorRepo;
        }

        [HttpGet]
        [Route("/listarTodosFornecedores")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult ListAllSuppliers()
        {
            try
            {
                return Ok(ListAllSuppliers());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("/CriarNovoFornecedor")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult CreateNewSupplier(data.DTO.Fornecedor fornecedor)
        {
            try
            {
                return Ok(CreateNewSupplier(fornecedor));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("/AtualizarFornecedor")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdateSupplier(data.DTO.Fornecedor fornecedor)
        {
            try
            {
                return Ok(UpdateSupplier(fornecedor));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("/ApagarFornecedor")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult DeleteSupplier(Guid id)
        {
            try
            {
                return Ok(DeleteSupplier(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
