import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  // Agregar estos métodos para manejar el login y logout
  login(username: string, password: string) {
    this.authService.login(username, password);
  }

  logout() {
    this.authService.logout();
  }
}
