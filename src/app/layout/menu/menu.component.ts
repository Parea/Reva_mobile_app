import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private menus = [
    null,
    {
      links: []
    },
    {
      links: [
        { title: 'Accueil', url: '/admin/dashboard', icon: 'home' },
      ]
    },
    {
      links: [
        { title: 'Accueil', url: '/director/dashboard', icon: 'home' },
      ]
    },
    {
      links: [
        { title: 'Accueil', url: '/manager/dashboard', icon: 'home' },
      ]
    },
    {
      links: [
        { title: 'Accueil', url: '/agent/dashboard', icon: 'home' },
      ]
    }
  ];
  public appPages = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.authService.getAuth().then((user: any) => {
        this.appPages = this.menus[user.user_type_id].links;
      }).catch(e => console.log('Error init menu: ', e));
    }
  }

  public logout(): void {
    this.authService.logout().then(() => this.router.navigate(['/login']))
    .catch(e => console.log('Error logout: ', e));
  }
}
