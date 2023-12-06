import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  showLoginForm() {
    this.authService.setFormType('login');
  }

  showRegisterForm() {
    this.authService.setFormType('cadastro');
  }
}
