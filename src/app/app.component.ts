import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio / Perfil', url: '/folder/Inbox/perfil', icon: 'home' },
    { title: 'Candidatos', url: '/folder/Candidatos', icon: 'person' },
    { title: 'Votar', url: '/folder/Votar', icon: 'finger-print' },
    { title: 'Verificar Voto', url: '/folder/Verificar Voto', icon: 'cloud-done' },
  ];
  
  constructor() {}
}
