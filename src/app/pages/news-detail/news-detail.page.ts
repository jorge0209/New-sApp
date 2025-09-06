import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: false
})
export class NewsDetailPage implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    // Recuperamos el artículo desde los queryParams
    this.route.queryParams.subscribe(params => {
      this.article = JSON.parse(params['article']);
    });
  }

  openInBrowser() {
    this.iab.create(this.article.url, '_blank', {
      location: 'yes',
      toolbar: 'yes',
      hideurlbar: 'yes'
    });
  }
}
