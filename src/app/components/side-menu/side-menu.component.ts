import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import path from 'path';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  links = [
    {
      title: 'Boards',
      icon: faTrello,
      path: '/board',
    },
    {
      title: 'Templates',
      icon: faBox,
      path: '',
    },
    {
      title: 'Home',
      icon: faWaveSquare,
      path: '',
    },
  ];
}
