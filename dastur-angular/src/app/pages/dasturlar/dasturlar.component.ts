import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TRADITIONS, TraditionCard, TraditionCategory } from '../../content/tradition-content';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-dasturlar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main id="resources-page">
      <section class="section">
        <h2 class="section-title">{{ t('res-title') }}</h2>

        <div class="res-hero-split">
          <div class="res-left-col">
            <div class="res-intro-card">
              <p id="res-intro-text">{{ t('res-intro-text') }}</p>
            </div>
          </div>
          <div class="res-right-col">
            <div class="study-cta-card">
              <a class="study-link-button prominent" href="https://qazaq-app.vercel.app/" target="_blank" rel="noreferrer">
                {{ studyLinkText }}
                <i class="fas fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="filter-bar">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input [(ngModel)]="searchTerm" [placeholder]="searchPlaceholder" type="text">
          </div>

          <div class="filter-pill-group">
            <button
              *ngFor="let option of filterOptions"
              type="button"
              class="filter-pill"
              [class.active]="selectedCategory === option.value"
              (click)="selectedCategory = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="three-card-grid">
          <button
            class="glass-card tradition-card"
            *ngFor="let tradition of filteredTraditions"
            type="button"
            (click)="openTradition(tradition)"
          >
            <div class="card-icon"><i [class]="tradition.icon"></i></div>
            <h3>{{ tradition.content[lang].title }}</h3>
            <p>{{ tradition.content[lang].teaser }}</p>
            <span class="card-link">
              {{ moreLabel }}
              <i class="fas fa-expand"></i>
            </span>
          </button>
        </div>

        <p *ngIf="filteredTraditions.length === 0" class="empty-state">
          {{ emptyLabel }}
        </p>
      </section>
    </main>

    <div class="modal-backdrop" *ngIf="selectedTradition as tradition" (click)="closeTradition()">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <button class="modal-close" type="button" (click)="closeTradition()">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-head">
          <div class="card-icon"><i [class]="tradition.icon"></i></div>
          <div>
            <p class="eyebrow">{{ t('dasturler-title') }}</p>
            <h2>{{ tradition.content[lang].title }}</h2>
          </div>
        </div>

        <p class="modal-text">{{ tradition.content[lang].full }}</p>
      </div>
    </div>
  `,
})
export class DasturlarComponent {
  traditions = TRADITIONS;
  selectedTradition: TraditionCard | null = null;
  selectedCategory: TraditionCategory | 'all' = 'all';
  searchTerm = '';

  constructor(private ts: TranslationService) {}

  get lang() {
    return this.ts.currentLang;
  }

  get moreLabel(): string {
    return this.lang === 'ru'
      ? 'Подробнее'
      : this.lang === 'kz'
        ? 'Толығырақ'
        : 'Read more';
  }

  get searchPlaceholder(): string {
    return this.lang === 'ru'
      ? 'Поиск традиции'
      : this.lang === 'kz'
        ? 'Дәстүр іздеу'
        : 'Search traditions';
  }

  get emptyLabel(): string {
    return this.lang === 'ru'
      ? 'По текущему поиску и фильтру ничего не найдено.'
      : this.lang === 'kz'
        ? 'Ағымдағы іздеу мен сүзгі бойынша ештеңе табылмады.'
        : 'No traditions match the current search and filter.';
  }

  get studyLinkText(): string {
    return this.lang === 'ru'
      ? 'Начать изучение языка'
      : this.lang === 'kz'
        ? 'Тілді үйренуді бастау'
        : 'Start learning the language';
  }

  get filterOptions() {
    return [
      { value: 'all' as const, label: this.lang === 'ru' ? 'Все' : this.lang === 'kz' ? 'Барлығы' : 'All' },
      { value: 'wedding' as const, label: this.lang === 'ru' ? 'Свадьба' : this.lang === 'kz' ? 'Үйлену' : 'Wedding' },
      { value: 'child' as const, label: this.lang === 'ru' ? 'Ребенок' : this.lang === 'kz' ? 'Бала' : 'Child' },
      { value: 'festival' as const, label: this.lang === 'ru' ? 'Праздник' : this.lang === 'kz' ? 'Мереке' : 'Festival' },
      { value: 'social' as const, label: this.lang === 'ru' ? 'Общество' : this.lang === 'kz' ? 'Қоғам' : 'Social' },
    ];
  }

  get filteredTraditions(): TraditionCard[] {
    const query = this.searchTerm.trim().toLowerCase();

    return this.traditions.filter(tradition => {
      const matchesCategory = this.selectedCategory === 'all' || tradition.category === this.selectedCategory;
      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const data = tradition.content[this.lang];
      return [data.title, data.teaser, data.full].join(' ').toLowerCase().includes(query);
    });
  }

  openTradition(tradition: TraditionCard): void {
    this.selectedTradition = tradition;
  }

  closeTradition(): void {
    this.selectedTradition = null;
  }

  t(key: string) {
    return this.ts.t(key);
  }
}
