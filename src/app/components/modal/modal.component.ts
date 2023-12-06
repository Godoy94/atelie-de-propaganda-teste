// modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showModal = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
