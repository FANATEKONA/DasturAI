import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Lang } from './translation.service';
import { TranslatePipe } from './translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, TranslatePipe],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  menuOpen = false;
  currentLang: Lang = 'ru';
  private sub!: Subscription;

  constructor(public ts: TranslationService) {}

  ngOnInit(): void {
    this.sub = this.ts.lang$.subscribe(l => (this.currentLang = l));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  setLang(lang: Lang): void {
    this.ts.setLanguage(lang);
    this.menuOpen = false;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
