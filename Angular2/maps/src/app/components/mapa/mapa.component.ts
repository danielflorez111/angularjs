import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import { DeviceService } from '../../services/device.service';
import { IDevice } from '../../interfaces/device.interface';
import { ILocation } from '../../interfaces/location.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  devices: IDevice[] = [];
  location: ILocation;
  marcadores: Marcador[] = []
  lat: number = 6.1927566999999994;
  lng: number = -75.59531129999999;

  constructor(public snackBar: MatSnackBar, private _deviceService: DeviceService) {
    this.devices = this._deviceService.getDevices();
    //this.setLocation();

    this.test().then((position) => {
      console.log(position);
    })
  }

  ngOnInit() {
  }

  agregarMarcador(event) {
    const coords: { lat: number, lng: number } = event.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 1000 });
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 1000 });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  setLocation(location?: ILocation) {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("jaja", this.location);
      });
    } else {
      this.location = {
        lat: location.lat,
        lng: location.lng
      };
    }
  }

  bla(event) {
    this.devices.map((device) => {
      device.distance = 1;
    });
    this.setLocation(event.coords);
    console.log(this.devices);
  }

  test() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

}