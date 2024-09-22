import { Component } from '@angular/core';
import { PartyService } from './services/party.service'; 

interface AppPage {
  title: string;
  url: string;
  icon: string;
  parties?: { name: string; title: string; candidates: any[] }[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: AppPage[] = [
    { title: 'Inicio / Perfil', url: '/folder/Inbox/perfil', icon: 'home' },
    {
      title: 'Candidatos', url: '/folder/Inbox/candidatos', icon: 'person',
      parties: [
        {
          name: 'Partido 1',
          title: 'Partido 1',
          candidates: [
            { firstName: 'Juan', lastName: 'Pérez', category: 'Presidente', generalInfo: 'Información del candidato 1.', proposalFile: 'url_del_archivo_propuestas_1' },
          ]
        },
        {
          name: 'Partido 2',
          title: 'Partido 2',
          candidates: [
            { firstName: 'Ana', lastName: 'García', category: 'Alcalde', generalInfo: 'Información del candidato 2.', proposalFile: 'url_del_archivo_propuestas_2' },
          ]
        },
        {
          name: 'Partido 3',
          title: 'Partido 3',
          candidates: [
            { firstName: 'Carlos', lastName: 'Martínez', category: 'Senador', generalInfo: 'Información del candidato 3.', proposalFile: 'url_del_archivo_propuestas_3' },
          ]
        }
      ]
    },
    { title: 'Votar', url: '/folder/Inbox/Votar', icon: 'finger-print' },
    { title: 'Verificar Voto', url: '/folder/Inbox/Verificar Voto', icon: 'cloud-done' },
  ];
  
  constructor(private partyService: PartyService) {}

  selectParty(party: any) {
    const fullParty = this.appPages.find(p => p.parties && p.parties.some(pt => pt.title === party.title));
    if (fullParty && fullParty.parties) {
      const selectedParty = fullParty.parties.find(pt => pt.title === party.title);
      if (selectedParty) {
        this.partyService.setParty(selectedParty); // Actualiza el partido seleccionado
      }
    }
  }
  
}
