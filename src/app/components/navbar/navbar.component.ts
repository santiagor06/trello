import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell,faInfoCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule,DropdownComponent,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isOpen: boolean = false;
  faBell=faBell;
  faInfoCircle=faInfoCircle


}
