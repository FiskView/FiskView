import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user = {
    profilePhoto: 'path/to/default/photo.jpg',
    name: 'Nombre del Usuario',
    dni: '12345678',
    documentType: 'DNI', // Agrega el tipo de documento
    birthDate: '', // Inicializa vacío
    email: 'user@example.com',
    department: '', // Inicializa vacío
    province: '', // Inicializa vacío
    district: '' // Inicializa vacío
  };

  departments = ['Departamento 1', 'Departamento 2', 'Departamento 3'];
  districts = ['Distrito 1', 'Distrito 2', 'Distrito 3'];
  provinces = ['Provincia 1', 'Provincia 2', 'Provincia 3'];

  showCalendar = false;
  isEmailEditable = false; 

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Aquí puedes cargar datos adicionales si es necesario
    console.log('Departments:', this.departments);
    console.log('Districts:', this.districts);
    console.log('Provinces:', this.provinces);
  }

  someMethod() {
    // Cambiar datos
    this.departments.push('Nuevo Departamento');
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  changeProfilePhoto() {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    input?.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePhoto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  selectDepartment(department: string) {
    console.log('Departamento seleccionado:', department);
  }
  
  selectDistrict(district: string) {
    console.log('Distrito seleccionado:', district);
  }
  
  selectProvince(province: string) {
    console.log('Provincia seleccionada:', province);
  }

  openDatePicker() {
    this.showCalendar = !this.showCalendar;
  }

  onDateChange(event: any) {
    const selectedDate = event.detail.value; // Obtiene la fecha en formato YYYY-MM-DD
    if (selectedDate) {
      const formattedDate = this.formatDate(selectedDate);
      this.user.birthDate = formattedDate;
    }
    this.showCalendar = false; // Oculta el calendario después de seleccionar la fecha
  }

  formatDate(date: string): string {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`; // Cambia el formato a dd/MM/yyyy
  }

  getFormattedDate(): string {
    return this.user.birthDate || ''; // Devuelve la fecha en el formato adecuado
  }

  toggleEmailEdit() {
    this.isEmailEditable = !this.isEmailEditable; 
    console.log("Email editable:", this.isEmailEditable);
  }

  saveData() {
    // Aquí puedes implementar la lógica para guardar los datos del usuario
    console.log('Datos guardados:', this.user);
    // Podrías hacer una llamada a un servicio para guardar los datos en un servidor, por ejemplo.
  }
}
