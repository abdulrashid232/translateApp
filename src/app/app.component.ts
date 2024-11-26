import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'translateApp';
  languages = ['tr', 'en','de','fr','ru'];
  
  private translate = inject(TranslateService);
  blogPosts = [
    { title: 'post_1_title', content: 'post_1_content' },
    { title: 'post_2_title', content: 'post_2_content' },
    { title: 'post_3_title', content: 'post_3_content' },
    { title: 'post_4_title', content: 'post_4_content' },
    // { title: 'post_5_title', content: 'post_5_content' },
  ];
  
  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  translateDynamicContent(key: string, value: string): string {
    return this.translate.instant(key, { value });
  }
}
