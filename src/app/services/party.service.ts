import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private selectedPartySubject = new BehaviorSubject<any>(null);
  selectedParty$ = this.selectedPartySubject.asObservable();

  setParty(party: any) {
    this.selectedPartySubject.next(party); // Emite el nuevo partido seleccionado
  }

  getParty() {
    return this.selectedPartySubject.getValue(); // Devuelve el partido actual
  }
}
