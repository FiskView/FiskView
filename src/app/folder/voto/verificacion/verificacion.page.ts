import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserModalComponent } from 'src/app/user-modal/user-modal.component';  // Adjust the path if necessary
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit{
  videoUrl: string = 'http://127.0.0.1:5000/video_feed'; // URL del backend Flask

ngOnInit(): void {
  this.iniciarVerificacion();
}

  constructor(
    private router: Router,
    private http: HttpClient
  ){

  }

  iniciarVerificacion() {
    // Retrasar la ejecución del intervalo de verificación 10 segundos
    setTimeout(() => {
        this.http.get('http://127.0.0.1:5000/usuario_recibido')
          .subscribe(
            (respuesta: any) => {
              console.log(respuesta);
              if (respuesta) {
                this.recibirDatos(respuesta);
              }
            },
            error => {
              console.error("Error al obtener los datos del usuario: ", error);
            }
          );
    }, 10000);  // Esperar 10 segundos antes de iniciar la primera verificación
  }
  

  recibirDatos(usuario: any) {
    if (usuario) {
      const { id_usuario, nombre, apellidos } = usuario;  // Usa la clave adecuada

      console.log(`Usuario encontrado: ID: ${id_usuario}, Nombre: ${nombre} ${apellidos}`);

      // Cambiar la ruta
      this.router.navigate(['/folder/Inbox/voto/categorias']);
    } else {
      console.log("No se encontró el usuario.");
    }
  }
}