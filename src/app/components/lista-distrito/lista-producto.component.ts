import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../shared/material/material.module';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css',
})
export class ListaProductoComponent implements OnInit {
  dataSource: any;

  displayedColumns = ['id', 'nombre', 'categoria', 'precio'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private productoService: ProductoService) {}

  listaProductos() {
    return this.productoService.obtenerProductos().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Producto>(data);
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
    this.listaProductos();
  }

  ngOnInit(): void {
    this.listaProductos();
  }
}
