import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { ClienteService } from '../../services/cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-lista-cliente',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css',
})
export class ListaClienteComponent implements OnInit {
  dataSource: any;

  displayedColumns = ['id', 'nombre', 'direccion', 'telefono', 'email'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService) {}

  listaClientes() {
    return this.clienteService.obtenerClientes().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Cliente>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  aplicarFiltroListado(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  actualizarLista() {
    this.listaClientes();
  }

  ngOnInit(): void {
    this.listaClientes();
  }
}
