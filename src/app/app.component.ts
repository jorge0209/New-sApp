import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

type CategoryId = 'business'|'entertainment'|'general'|'health'|'science'|'sports'|'technology';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  userName = '';
  isOnline = true;

  categories: { id: CategoryId; title: string }[] = [
    { id: 'business',       title: 'Business' },
    { id: 'entertainment',  title: 'Entertainment' },
    { id: 'general',        title: 'General' },
    { id: 'health',         title: 'Health' },
    { id: 'science',        title: 'Science' },
    { id: 'sports',         title: 'Sports' },
    { id: 'technology',     title: 'Technology' },
  ];

  constructor(private menu: MenuController, private router: Router) {
    this.userName = localStorage.getItem('user_name') || 'Usuario';
  }

  openCategory(cat: CategoryId) {
    this.menu.close();
    this.router.navigate(['/home'], { queryParams: { category: cat } });
  }

  logout() {
    localStorage.removeItem('user_name');
    this.menu.close();
    this.router.navigate(['/login']);
  }
}