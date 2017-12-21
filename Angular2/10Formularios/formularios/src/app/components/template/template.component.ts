import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre"
  }

  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    },
    {
      codigo: "COL",
      nombre: "Colombia"
    }];

  sexos = ["Hombre", "Mujer"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm: ", forma);
    console.log("Value", forma.value);

    console.log("Usuario", this.usuario);
  }

}
