import { ItemPedidoModel } from './ItemPedidoModel';
import { UsuarioModel } from './UsuarioModel';
export class PedidoModel{
    public IdPedido = "";
    public Data = new DataPedidoModel();
}

export class DataPedidoModel{
    public Cliente = new UsuarioModel();
    public Items = new Array<ItemPedidoModel>();
    public DataHora = new  Date();

    public ValorTotal = 0.0;
}