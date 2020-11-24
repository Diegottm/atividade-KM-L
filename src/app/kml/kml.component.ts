import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kml',
  templateUrl: './kml.component.html',
  styleUrls: ['./kml.component.css']
})
export class KMLComponent implements OnInit {
  distancia : number;
  litrosGastos : number;
  media : number;
  constructor() { }

  ngOnInit(): void {
  }
  calcularKml(){
    this.media = this.distancia/this.litrosGastos;
  }
}


