import { Component, OnInit } from '@angular/core';
import { PartyService } from 'src/app/services/party.service'; 

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.page.html',
  styleUrls: ['./candidatos.page.scss'],
})
export class CandidatosPage implements OnInit {
  public parties = [
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
    },
  ];

  public selectedParty: any = null;

  constructor(private partyService: PartyService) {}
  
  ngOnInit() {
    this.partyService.selectedParty$.subscribe(party => {
      console.log('Partido seleccionado:', party); // Agrega esta línea
      this.selectedParty = party; // Actualiza selectedParty
    });
  }
}
