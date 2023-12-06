import { Component, OnInit,  ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  formType: string | null = null;
  isModalOpen = false;  
  classificacoes = ['Gerente', 'Revendedor', 'Distribuidor'];
  selectedClassificacao: string | null = null;

  user = {
    name: '',
    tax_id: '',
    email: '',
    password: '',
    password_confirmation: '',
    company: '',
    segment: '',
  };

  constructor(
    private authService: AuthService,
    private el: ElementRef,
    private cadastroService: RegisterService
  ) {}

  ngOnInit() {
    this.authService.formType$.subscribe((type: string | null) => {
      this.formType = type;
      this.focusOnForm();
    });
  }

  ngAfterViewInit() {
    this.focusOnForm();
  }

  showRegisterForm() {
    this.authService.setFormType('cadastro');
  }

  showLoginForm() {
    this.authService.setFormType('login');
  }

  private focusOnForm() {
    if (this.formType) {
      // Foca no primeiro input dentro do formulário
      const inputElement = this.el.nativeElement.querySelector(`#${this.formType}Form input`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  registerUser() {
    console.log("Enviar clicado")
    this.cadastroService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Registro bem-sucedido:', response);
        this.isModalOpen = true;
        this.clearForm();
      },
      (error) => {
        console.error('Erro durante o registro:', error);
      }
    );
  }

  private clearForm() {
    this.user = {
      name: '',
      tax_id: '',
      email: '',
      password: '',
      password_confirmation: '',
      company: '',
      segment: '',
    };
  }

  closeModal() {
    console.log("Fechei", this.isModalOpen)
    this.isModalOpen = false;
  }
  
}
