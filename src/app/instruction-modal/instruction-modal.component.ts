import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instruction-modal',
  standalone: true,
  imports: [],
  templateUrl: './instruction-modal.component.html',
  styleUrl: './instruction-modal.component.scss'
})
export class InstructionModalComponent {
@Output() agreed = new EventEmitter<void>();
  isVisible = true;

  agree() {
    this.isVisible = false;
    this.agreed.emit();
  }
}
