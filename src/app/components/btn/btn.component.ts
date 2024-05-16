import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  @Input() typeBtn: "button"|"submit"|"reset"="button"
  constructor() {}

  ngOnInit(): void {}
}
