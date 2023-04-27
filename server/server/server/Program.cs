var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<data.Context.CadastroContext>();

builder.Services.AddScoped<
    data.Interface.IEmpresaRepo,
    data.Repository.EmpresaRepo>();

builder.Services.AddScoped<
    data.Interface.IFornecedorRepo,
    data.Repository.FornecedorRepo>();

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(cors=>cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
