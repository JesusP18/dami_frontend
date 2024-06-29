import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido.model';
import { MaterialModule } from '../../shared/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-pedido',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css'],
})
export class ListaPedidoComponent implements OnInit {
  dataSource: MatTableDataSource<Pedido>;
  displayedColumns: string[] = [
    'id',
    'cliente',
    'direccion',
    'telefono',
    'email',
    'detalles',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pedidoService: PedidoService) {
    this.dataSource = new MatTableDataSource<Pedido>();
  }

  listaPedidos() {
    this.pedidoService.obtenerPedidos().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
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
    this.listaPedidos();
  }

  ngOnInit(): void {
    this.listaPedidos();
  }
}
