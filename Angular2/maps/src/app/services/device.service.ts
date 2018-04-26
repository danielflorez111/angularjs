import { Injectable } from '@angular/core';
import { IDevice } from "../interfaces/device.interface";

@Injectable()
export class DeviceService {

  private devices: IDevice[] = [
    {
      id: 1,
      title: 'Parque de las Chimeneas',
      lat: 6.192440,
      lng: -75.592663
    },
    {
      id: 2,
      title: 'Centro de la moda',
      lat: 6.190444,
      lng: -75.595250
    },
    {
      id: 3,
      title: 'Cancha',
      lat: 6.193059,
      lng: -75.595905
    }
  ];

  constructor() { }

  getDevices() {
    return this.devices;
  }

}
