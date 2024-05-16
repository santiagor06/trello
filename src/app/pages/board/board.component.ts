import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { BoardCardComponent } from '../../components/board-card/board-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    SideMenuComponent,
    FontAwesomeModule,
    BoardCardComponent,
    CommonModule,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  boards = [
    {
      title: 'Board 1',
      color: 'primary',
    },
    {
      title: 'Board 2',
      color: 'green',
    },
    {
      title: 'Board 3',
      color: 'orange',
    },
    {
      title: 'Board 4',
      color: 'blue',
    },
  ];
  faClock = faClock;
}
