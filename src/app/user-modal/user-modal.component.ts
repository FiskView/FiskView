import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent {
  @Input() userId: string = '';
  @Input() userName: string = '';
  @Input() userLastName: string = '';

  constructor(private modalController: ModalController) {} 

  closeModal() {
    // Puedes pasar datos de regreso si lo necesitas
    this.modalController.dismiss({
      dismissed: true, // Indicador de que el modal fue cerrado
      userId: this.userId,
      userName: this.userName,
      userLastName: this.userLastName,
    });
  }
}
