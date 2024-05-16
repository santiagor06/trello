import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BoardComponent } from './pages/board/board.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
];
