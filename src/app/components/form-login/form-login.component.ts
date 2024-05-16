import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {

}
