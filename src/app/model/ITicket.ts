import { IVehiculo } from "./IVehiculo";

export interface ITicket {
    numeroTicket: any,
    puesto: number,
    horaEntrada: any,
    horaSalida: any,
    vehiculo: IVehiculo,
}