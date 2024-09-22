import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  tituloCategoria: string = 'Elección Presidencial 2024';
  candidatos: any[] = [];
  seleccionado: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Ejemplo de lista de candidatos, podrías cargar esta información desde un servicio o API
    this.candidatos = [
      {
        nombre: 'Candidato 1',
        partido: 'Partido A',
        imagen: 'assets/images/1.png',
        seleccionado: false
      },
      {
        nombre: 'Candidato 2',
        partido: 'Partido B',
        imagen: 'assets/images/2.png',
        seleccionado: false
      },
      {
        nombre: 'Candidato 3',
        partido: 'Partido C',
        imagen: 'assets/images/3.png',
        seleccionado: false
      }
    ];
  }

  verificarSeleccion(candidato: any) {
    // Solo permitir una selección
    this.candidatos.forEach(c => {
      if (c !== candidato) {
        c.seleccionado = false;
      }
    });
    this.seleccionado = !!this.candidatos.find(c => c.seleccionado);
  }

  siguienteCategoria() {
    // Lógica para pasar a la siguiente categoría
    // En este ejemplo, redirige a la página de resumen (puedes cambiar esta lógica)
    this.router.navigate(['/folder/Inbox/voto/resumen']);
  }
}
