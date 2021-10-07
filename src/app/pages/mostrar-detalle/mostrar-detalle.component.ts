import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-mostrar-detalle',
  templateUrl: './mostrar-detalle.component.html',
  styleUrls: ['./mostrar-detalle.component.css']
})
export class MostrarDetalleComponent implements OnInit {

  @Input() public usuario!: Usuario;
  
  constructor() { }

  ngOnInit(): void {
  }

}
