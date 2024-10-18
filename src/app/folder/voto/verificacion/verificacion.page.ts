import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  templateUrl: 'verificacion.page.html',
  styleUrls: ['verificacion.page.scss'],
})
export class VerificacionPage {
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>; // Definir como ElementRef
  mensaje: string = ''; // Variable para el mensaje
  nombreVotante: string = ''; // Variable para almacenar el nombre del votante

  constructor(private http: HttpClient, private platform: Platform, private router: Router) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.startCamera();
    });

    // Captura de imágenes cada 2 segundos
    setInterval(() => {
      this.captureImage();
    }, 2000);
  }

  async startCamera() {
    // Accede a la cámara del dispositivo
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.video.nativeElement.srcObject = stream;
    this.video.nativeElement.play();
  }

  async captureImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Ajustar el tamaño del canvas al tamaño del video
    canvas.width = this.video.nativeElement.videoWidth;
    canvas.height = this.video.nativeElement.videoHeight;

    if (context) {
        context.drawImage(this.video.nativeElement, 0, 0, canvas.width, canvas.height);
        const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];

        if (base64Image) {
            this.sendImageToServer(base64Image);
        } else {
            console.error('No se pudo capturar la imagen');
        }
    } else {
        console.error('No se pudo obtener el contexto del canvas');
    }
  }

  sendImageToServer(base64Image: string) {
    const body = { image: base64Image };
    
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('authToken');
  
    if (token) {
      // Configurar los encabezados con el token de autorización
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      
      this.http.post('http://localhost:8080/api/recognition', body, { headers }).subscribe(
        (response: any) => {
          console.log('Response from server', response);
          
          if (response && response.recognized && response.nombre) {
            this.nombreVotante = response.nombre;
            this.mensaje = `Hola, ${this.nombreVotante}, puedes continuar con tu voto!`;
  
            setTimeout(() => {
              this.router.navigate(['/categorias']);
            }, 3000);
          } else {
            this.mensaje = 'Rostro no reconocido, por favor intenta nuevamente.';
            console.error('Face not recognized or unexpected response structure', response);
          }
        },
        (error) => {
          console.error('Error sending image', error);
          this.mensaje = 'Hubo un error al procesar la imagen, intenta nuevamente.';
        }
      );
    } else {
      console.error('No auth token found');
      this.mensaje = 'No estás autenticado, por favor inicia sesión.';
    }
  }
  
  
}
