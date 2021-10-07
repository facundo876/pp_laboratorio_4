import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listadoUsuarios: Usuario[] = [];
  usuarioDetalle:Usuario = new Usuario();

  constructor() { 
    this.listadoUsuarios = [{email: "facundo@gmai.com", nombre: "admin", id: 1, perfil: "admin"}]
  }

  ngOnInit(): void {
  }

  guardarUsuario(usuario: Usuario){
    var aux = new Usuario();
    aux.perfil = usuario.perfil;
    aux.id = usuario.id;
    aux.email = usuario.nombre;

    this.listadoUsuarios.push(aux);
  }

  mostrarUsuarioSeleccionado(usuario:Usuario){
    this.usuarioDetalle = usuario;
  }
}
