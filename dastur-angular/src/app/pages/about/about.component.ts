import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <main id="resources-page">
      <section class="section">
        <p class="eyebrow centered">{{ 'about-pill' | translate }}</p>
        <h2 class="section-title">{{ 'about-title' | translate }}</h2>
        <p class="section-lead">{{ 'about-desc' | translate }}</p>

        <div class="steps-grid">
          <article class="step-card">
            <span class="step-number">01</span>
            <h3>{{ 'about-mission-h' | translate }}</h3>
            <p>{{ 'about-mission-p' | translate }}</p>
          </article>

          <article class="step-card">
            <span class="step-number">02</span>
            <h3>{{ 'about-audience-h' | translate }}</h3>
            <p>{{ 'about-audience-p' | translate }}</p>
          </article>

          <article class="step-card">
            <span class="step-number">03</span>
            <h3>{{ 'about-format-h' | translate }}</h3>
            <p>{{ 'about-format-p' | translate }}</p>
          </article>
        </div>

        <div class="cta-panel" style="margin-top: 40px;">
          <div>
            <p class="eyebrow">{{ 'nav-madeniyet' | translate }}</p>
            <h2>{{ 'dasturler-title' | translate }}</h2>
            <p>{{ 'dasturler-desc' | translate }}</p>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class AboutComponent {}
