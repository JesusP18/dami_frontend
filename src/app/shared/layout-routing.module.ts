import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListaPedidoComponent } from '../components/lista-pedido/lista-pedido.component';
import { ListaClienteComponent } from '../components/lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from '../components/lista-distrito/lista-producto.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent,
      //   pathMatch: 'full',
      // },
      {
        path: 'lista-pedidos',
        component: ListaPedidoComponent,
      },
      {
        path: 'lista-clientes',
        component: ListaClienteComponent,
        pathMatch: 'full',
      },
      {
        path: 'lista-productos',
        component: ListaProductoComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
