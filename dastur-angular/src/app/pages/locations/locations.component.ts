import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TOURIST_PLACES, TouristCategory, TouristPlace } from '../../content/tourist-content';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main id="resources-page">
      <section class="section">
        <h2 class="section-title">{{ pageTitle }}</h2>

        <div class="location-hero">
          <div class="res-intro-card">
            <p id="res-intro-text">{{ pageIntro }}</p>
          </div>

          <div class="location-hero-grid">
            <article class="location-hero-card" *ngFor="let preview of heroPlaces">
              <img [src]="preview.image" [alt]="preview.content[lang].title">
              <div class="location-hero-copy">
                <span>{{ preview.content[lang].region }}</span>
                <h3>{{ preview.content[lang].title }}</h3>
              </div>
            </article>
          </div>
        </div>

        <div class="filter-bar">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input
              [(ngModel)]="searchTerm"
              [placeholder]="searchPlaceholder"
              type="text"
            >
          </div>

          <div class="filter-pill-group">
            <button
              *ngFor="let option of locationFilterOptions"
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
            *ngFor="let place of filteredPlaces"
            class="glass-card tradition-card place-card"
            type="button"
            (click)="openPlace(place)"
          >
            <img [src]="place.image" [alt]="place.content[lang].title" class="place-card-image">
            <div class="place-card-body">
              <span class="place-region">{{ place.content[lang].region }}</span>
              <h3>{{ place.content[lang].title }}</h3>
              <p>{{ place.content[lang].teaser }}</p>
              <span class="card-link">
                {{ moreLabel }}
                <i class="fas fa-expand"></i>
              </span>
            </div>
          </button>
        </div>

        <p *ngIf="filteredPlaces.length === 0" class="empty-state">
          {{ emptyLabel }}
        </p>
      </section>
    </main>

    <div class="modal-backdrop" *ngIf="selectedPlace as place" (click)="closePlace()">
      <div class="modal-card" (click)="$event.stopPropagation()">
        <button class="modal-close" type="button" (click)="closePlace()">
          <i class="fas fa-times"></i>
        </button>

        <img [src]="place.image" [alt]="place.content[lang].title" class="modal-image">

        <div class="modal-head compact">
          <div>
            <p class="eyebrow">{{ pageTitle }}</p>
            <h2>{{ place.content[lang].title }}</h2>
            <p class="modal-region">{{ place.content[lang].region }}</p>
          </div>
        </div>

        <p class="modal-text">{{ place.content[lang].full }}</p>
      </div>
    </div>
  `,
})
export class LocationsComponent {
  places = TOURIST_PLACES;
  selectedCategory: TouristCategory | 'all' = 'all';
  searchTerm = '';
  selectedPlace: TouristPlace | null = null;

  constructor(private ts: TranslationService) {}

  get lang() {
    return this.ts.currentLang;
  }

  get pageTitle(): string {
    return this.lang === 'ru'
      ? 'Туристические места Казахстана'
      : this.lang === 'kz'
        ? 'Қазақстандағы туристік орындар'
        : 'Tourist Places in Kazakhstan';
  }

  get pageIntro(): string {
    return this.lang === 'ru'
      ? 'Раздел собирает самые выразительные природные, исторические и городские направления, которые подходят для внутреннего и международного туризма.'
      : this.lang === 'kz'
        ? 'Бұл бөлімде ішкі және халықаралық туризмге лайық табиғи, тарихи және қалалық бағыттар жинақталған.'
        : 'This section brings together notable natural, historical, and urban destinations suitable for domestic and international tourism.';
  }

  get searchPlaceholder(): string {
    return this.lang === 'ru'
      ? 'Поиск места'
      : this.lang === 'kz'
        ? 'Орын іздеу'
        : 'Search places';
  }

  get moreLabel(): string {
    return this.lang === 'ru'
      ? 'Подробнее'
      : this.lang === 'kz'
        ? 'Толығырақ'
        : 'Read more';
  }

  get emptyLabel(): string {
    return this.lang === 'ru'
      ? 'Ничего не найдено по текущему поиску и фильтру.'
      : this.lang === 'kz'
        ? 'Іздеу мен сүзгі бойынша ештеңе табылмады.'
        : 'No places match the current search and filter.';
  }

  get locationFilterOptions() {
    return [
      {
        value: 'all' as const,
        label: this.lang === 'ru' ? 'Все' : this.lang === 'kz' ? 'Барлығы' : 'All',
      },
      {
        value: 'nature' as const,
        label: this.lang === 'ru' ? 'Природа' : this.lang === 'kz' ? 'Табиғат' : 'Nature',
      },
      {
        value: 'history' as const,
        label: this.lang === 'ru' ? 'История' : this.lang === 'kz' ? 'Тарих' : 'History',
      },
      {
        value: 'city' as const,
        label: this.lang === 'ru' ? 'Город' : this.lang === 'kz' ? 'Қала' : 'City',
      },
    ];
  }

  get heroPlaces(): TouristPlace[] {
    return this.places.slice(0, 3);
  }

  get filteredPlaces(): TouristPlace[] {
    const query = this.searchTerm.trim().toLowerCase();

    return this.places.filter(place => {
      const matchesCategory = this.selectedCategory === 'all' || place.category === this.selectedCategory;
      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const data = place.content[this.lang];
      return [data.title, data.region, data.teaser, data.full]
        .join(' ')
        .toLowerCase()
        .includes(query);
    });
  }

  openPlace(place: TouristPlace): void {
    this.selectedPlace = place;
  }

  closePlace(): void {
    this.selectedPlace = null;
  }
}
