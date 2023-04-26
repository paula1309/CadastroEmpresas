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
                return Ok(_fornecedorRepo.ListAllSuppliers());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("/listarClientesPeloFornecedor")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult ListClientsBySupplier(Guid id)
        {
            try
            {
                return Ok(_fornecedorRepo.SearchClientsBySupplier(id));
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
                return Ok(_fornecedorRepo.CreateSupplier(fornecedor));
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
                return Ok(_fornecedorRepo.UpdateSupplier(fornecedor));
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
                return Ok(_fornecedorRepo.DeleteSupplier(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
