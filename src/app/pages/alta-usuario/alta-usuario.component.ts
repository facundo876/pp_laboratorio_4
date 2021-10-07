import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  @Output() altaUsuario:EventEmitter<Usuario> = new EventEmitter<Usuario>();
  usuario:Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    this.altaUsuario.emit(this.usuario);
  }
}
