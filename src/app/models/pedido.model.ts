import { Cliente } from './cliente.model';
import { DetallePedido } from './detalle_pedido.model';

export class Pedido {
  id?: number;
  cliente?: Cliente;
  detalles?: DetallePedido[];
}
