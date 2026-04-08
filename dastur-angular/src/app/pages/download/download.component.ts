import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="download-hero">
        <div class="dl-overlay"></div>
        <div class="dl-content">
          <div class="dl-container">
            <div class="dl-info">
              <h2 class="fade-in-up">{{ t('dl-title') }}</h2>
              <p class="fade-in-up" style="transition-delay:0.2s">{{ t('dl-desc') }}</p>
              <div class="dl-platforms fade-in-up" style="transition-delay:0.4s">
                <a href="#" class="platform-btn google-play">
                  <i class="fab fa-google-play"></i>
                  <span>Google Play</span>
                </a>
                <a href="#" class="platform-btn apple-store disabled">
                  <i class="fab fa-apple"></i>
                  <span>App Store (Soon)</span>
                </a>
              </div>
              <div class="download-note fade-in-up" style="transition-delay:0.5s">
                <h3>{{ t('dl-note-title') }}</h3>
                <p>{{ t('dl-note-desc') }}</p>
              </div>
            </div>
            <div class="dl-visual fade-in-up" style="transition-delay:0.6s">
              <div class="phone-mock">
                <div class="phone-screen">
                  <img src="https://res.cloudinary.com/dpzy965a9/image/upload/v1768578800/cld-sample-4.jpg" alt="Dastur App UI">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class DownloadComponent {
  constructor(private ts: TranslationService) {}

  t(key: string) {
    return this.ts.t(key);
  }
}
