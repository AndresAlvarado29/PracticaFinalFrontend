import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalleFactura";

export class Factura {
    numeroFactura: string = '';
    fecha: Date=new Date();
    subtotal: number =0;
    iva: number = 0.12;
    total: number = 0;
    cliente: Cliente=new Cliente();
    detalles: DetalleFactura[]=new Array<DetalleFactura>();
}