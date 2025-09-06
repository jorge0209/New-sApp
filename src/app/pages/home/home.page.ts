import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/services/news/news'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  articles: any[] = [];
  category: string = 'general';

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    // Suscribirse a cambios en queryParams
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || 'general';
      this.loadNews();
    });
  }

  loadNews() {
    if (this.category && this.category !== 'general') {
      this.newsService.getByCategory(this.category).subscribe(res => {
        this.articles = res.articles;
      });
    } else {
      this.newsService.getTopHeadlines().subscribe(res => {
        this.articles = res.articles;
      });
    }
  }
}
