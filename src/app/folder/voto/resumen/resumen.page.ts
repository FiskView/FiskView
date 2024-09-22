import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {

  resumenVoto = [
    {
      titulo: 'Candidato para Presidente',
      candidatoNombre: 'Juan Pérez',
      partidoNombre: 'Partido A',
      candidatoImagen: 'assets/images/1.png'
    },
    {
      titulo: 'Candidato para Alcalde',
      candidatoNombre: 'María García',
      partidoNombre: 'Partido B',
      candidatoImagen: 'assets/images/2.png'
    },
    {
      titulo: 'Candidato para Regidor',
      candidatoNombre: 'Carlos López',
      partidoNombre: 'Partido C',
      candidatoImagen: 'assets/images/3.png'
    }
  ];

  constructor(private router: Router) {}

  regresar() {
    // Navegar a la pantalla anterior para cambiar el voto
    this.router.navigate(['/folder/Inbox/voto/categorias']);
  }

  confirmarVoto() {
    // Redirigir a la pantalla de hash o confirmar el voto
    this.router.navigate(['/folder/Inbox/voto/hash']);
  }

  ngOnInit() {}
}
