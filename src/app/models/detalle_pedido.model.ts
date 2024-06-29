import { Pedido } from './pedido.model';
import { Producto } from './producto.model';

export class DetallePedido {
  id?: number;
  idPedido?: Pedido;
  idProducto?: Producto;
  cantidad?: number;
}
