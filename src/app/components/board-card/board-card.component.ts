import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-card.component.html',
  styleUrl: './board-card.component.scss',
})
export class BoardCardComponent {
  @Input() title?: string;
  @Input() color?: string;

  get colors() {
    return {
      'bg-sky-700': this.color === 'primary',
      'bg-green-700': this.color === 'green',
      'bg-amber-700': this.color === 'orange',
      'bg-indigo-700': this.color === 'blue',
    };
  }
}
