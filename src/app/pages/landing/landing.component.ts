import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormLoginComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
