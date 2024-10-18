import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    // Puedes recuperar el estado de autenticación desde el almacenamiento local o de otra manera
    const token = localStorage.getItem('token');
    this.loggedIn.next(!!token);
  }

  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    // Implementa tu lógica de autenticación aquí
    // Simular autenticación:
    const token = 'fake-jwt-token'; // Cambia esto por tu lógica de autenticación real
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
    return new BehaviorSubject({ token }).asObservable(); // Retorna un observable
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }
}
