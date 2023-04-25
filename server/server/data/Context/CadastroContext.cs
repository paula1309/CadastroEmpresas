using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using data.Entity;

namespace data.Context;

public partial class CadastroContext : DbContext
{
    public CadastroContext()
    {
    }

    public CadastroContext(DbContextOptions<CadastroContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Empresa> Empresas { get; set; }

    public virtual DbSet<Fornecedor> Fornecedores { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=Cadastro;Integrated Security=True; TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Empresa>(entity =>
        {
            entity.HasKey(e => e.IdEmpresa).HasName("PK_IdEmpresa");

            entity.HasIndex(e => e.Cnpj, "UQ__Empresas__A299CC926BDCB08A").IsUnique();

            entity.Property(e => e.IdEmpresa)
                .HasDefaultValueSql("(newid())")
                .HasColumnName("Id_Empresa");
            entity.Property(e => e.Cep)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Cnpj)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.NomeFantasia)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Nome_Fantasia");

            entity.HasMany(d => d.IdFornecedors).WithMany(p => p.IdEmpresas)
                .UsingEntity<Dictionary<string, object>>(
                    "EmpresasXfornecedore",
                    r => r.HasOne<Fornecedor>().WithMany()
                        .HasForeignKey("IdFornecedor")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_Id_Fornecedor"),
                    l => l.HasOne<Empresa>().WithMany()
                        .HasForeignKey("IdEmpresa")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_Id_Empresa"),
                    j =>
                    {
                        j.HasKey("IdEmpresa", "IdFornecedor").HasName("PK_IdEmpresaXIdFornecedor");
                        j.ToTable("EmpresasXFornecedores");
                        j.IndexerProperty<Guid>("IdEmpresa")
                            .HasDefaultValueSql("(newid())")
                            .HasColumnName("Id_Empresa");
                        j.IndexerProperty<Guid>("IdFornecedor")
                            .HasDefaultValueSql("(newid())")
                            .HasColumnName("Id_Fornecedor");
                    });
        });

        modelBuilder.Entity<Fornecedor>(entity =>
        {
            entity.HasKey(e => e.IdFornecedor).HasName("PK_IdFornecedor");

            entity.HasIndex(e => e.Rg, "UQ__Forneced__32153728AC78B8A8").IsUnique();

            entity.HasIndex(e => e.CnpjCpf, "UQ__Forneced__99282616086EDE93").IsUnique();

            entity.Property(e => e.IdFornecedor)
                .HasDefaultValueSql("(newid())")
                .HasColumnName("Id_Fornecedor");
            entity.Property(e => e.Cep)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.CnpjCpf)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Cnpj_Cpf");
            entity.Property(e => e.DataNascimento)
                .HasColumnType("date")
                .HasColumnName("Data_Nascimento");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Rg)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
