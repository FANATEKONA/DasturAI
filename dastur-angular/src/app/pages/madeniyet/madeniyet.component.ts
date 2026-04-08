import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CULTURE_TOPICS } from '../../content/culture-content';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-madeniyet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main id="resources-page">
      <section class="section">
        <h2 class="section-title">{{ t('mad-title') }}</h2>

        <div class="res-hero-split">
          <div class="res-left-col">
            <div class="res-intro-card">
              <p id="res-intro-text">{{ t('mad-intro') }}</p>
            </div>
          </div>
          <div class="res-right-col book-showcase">
            <div class="book-container">
              <div class="book">
                <img src="assets/culture-cover.svg" alt="Madeniyet cover" class="book-cover">
              </div>
              <div class="book-shadow"></div>
            </div>
          </div>
        </div>

        <div class="card-grid" style="margin-top: 60px;">
          <a
            class="glass-card resource-card interactive-card"
            *ngFor="let topic of topics"
            [routerLink]="['/madeniyet', topic.slug]"
          >
            <img [src]="topic.image" [alt]="topic.content[lang].title" class="resource-media">
            <div class="card-icon"><i [class]="topic.icon"></i></div>
            <h3>{{ topic.content[lang].title }}</h3>
            <p>{{ topic.content[lang].teaser }}</p>
            <span class="card-link">
              {{ detailLabel }}
              <i class="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </section>
    </main>
  `,
})
export class MadeniyetComponent {
  topics = CULTURE_TOPICS;

  constructor(private ts: TranslationService) {}

  get lang() {
    return this.ts.currentLang;
  }

  get detailLabel(): string {
    return this.lang === 'ru'
      ? 'Открыть раздел'
      : this.lang === 'kz'
        ? 'Бөлімді ашу'
        : 'Open section';
  }

  t(key: string) {
    return this.ts.t(key);
  }
}
