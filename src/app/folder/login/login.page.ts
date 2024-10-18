import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loading = false; // Para manejar el estado de carga
  passwordVisible = false; // Para manejar la visibilidad de la contraseña

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      correo_electronico: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loading = true; // Cambiar el estado de carga
      const { correo_electronico, contraseña } = this.loginForm.value;
      this.authService.login(correo_electronico, contraseña).subscribe(
        response => {
          localStorage.setItem('token', response.token); // Almacenar el token
          this.router.navigate(['/folder/Inbox/perfil']); // Redirigir al usuario a la página de inicio
          this.loading = false; // Finalizar el estado de carga
        },
        error => {
          console.error('Error de inicio de sesión', error);
          this.loading = false; // Finalizar el estado de carga en caso de error
        }
      );
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible; // Alternar visibilidad de la contraseña
  }
}
