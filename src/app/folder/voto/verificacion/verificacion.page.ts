import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {
  videoUrl: string = 'http://127.0.0.1:5000/video_feed'; // URL del backend Flask
  loadingIcon: boolean = false;  // Indicador para mostrar el ícono de carga

  constructor(private router: Router) {}

  ngOnInit() {
    this.iniciarVerificacion();
  }

  iniciarVerificacion() {
   
    setTimeout(() => {
      this.loadingIcon = true; 
      setTimeout(() => {
        this.router.navigate(['/folder/Inbox/voto/categorias']); 
      }, 2000);
    }, 30000);
  }
}
