import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CultureTopic, findCultureTopic } from '../../content/culture-content';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-madeniyet-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main id="resources-page" *ngIf="topic as item">
      <section class="section">
        <a class="detail-back" routerLink="/madeniyet">
          <i class="fas fa-arrow-left"></i>
          <span>{{ backLabel }}</span>
        </a>

        <div class="detail-layout">
          <div>
            <p class="eyebrow">{{ madeniyetLabel }}</p>
            <h1 class="detail-title">{{ content.title }}</h1>
            <p class="detail-summary">{{ content.summary }}</p>

            <div class="detail-grid">
              <article class="detail-section" *ngFor="let section of content.sections">
                <h3>{{ section.title }}</h3>
                <p>{{ section.text }}</p>
              </article>
            </div>
          </div>

          <aside class="detail-aside">
            <img [src]="item.image" [alt]="content.title" class="detail-image">
            <div class="detail-card">
              <div class="card-icon"><i [class]="item.icon"></i></div>
              <h3>{{ content.title }}</h3>
              <p>{{ content.teaser }}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  `,
})
export class MadeniyetDetailComponent implements OnInit {
  topic?: CultureTopic;

  constructor(
    private route: ActivatedRoute,
    private ts: TranslationService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.topic = findCultureTopic(slug);
    });
  }

  get content() {
    return this.topic?.content[this.ts.currentLang] ?? {
      title: '',
      teaser: '',
      summary: '',
      sections: [],
    };
  }

  get backLabel(): string {
    return this.ts.currentLang === 'ru'
      ? 'Назад к разделу'
      : this.ts.currentLang === 'kz'
        ? 'Бөлімге оралу'
        : 'Back to culture';
  }

  get madeniyetLabel(): string {
    return this.ts.t('mad-title');
  }
}
