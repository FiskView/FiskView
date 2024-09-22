import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage {

  constructor(private router: Router) {}

  iniciarVerificacion() {
    // Simulación de apertura de cámara
    setTimeout(() => {
      // Después de unos segundos, simular el reconocimiento y navegar
      alert('Verificación facial completada.'); 
      this.router.navigate(['/folder/Inbox/voto/categorias']); // Redirigir a la página de categorías
    }, 3000); // Espera 3 segundos para simular la verificación
  }
}
