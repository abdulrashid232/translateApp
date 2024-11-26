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
  languages = ['tr', 'en','de','fr'];
  
  private translate = inject(TranslateService);
  
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
