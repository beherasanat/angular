import {Component} from '@angular/core';
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-header',
  standalone: true,
  styleUrl: 'header.component.css',
  imports: [
    UserComponent
  ],
  templateUrl: 'header.component.html'
})
export class HeaderComponent {}
