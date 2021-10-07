import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-grilla-listado',
  templateUrl: './grilla-listado.component.html',
  styleUrls: ['./grilla-listado.component.css']
})
export class GrillaListadoComponent implements OnInit {

  @Input() public listado: Usuario[] = [];
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalle(usuariaA: Usuario){
    this.usuarioSeleccionado.emit(usuariaA);
  }
}
