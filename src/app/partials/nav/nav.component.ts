import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  openSidebar() {
    const sidebar = document.getElementsByClassName('dropdown-menu')[0]
    if (sidebar) {
      sidebar.classList.toggle('open')
    }
  }
}
