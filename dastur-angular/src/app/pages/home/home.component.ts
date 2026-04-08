import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { TranslatePipe } from '../../translate.pipe';

interface LocalTelegramConfig {
  botToken: string;
  chatId: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  inputName = '';
  inputTradition = '';
  inputText = '';
  formSubmitted = false;
  sending = false;
  submitError = false;

  constructor(public ts: TranslationService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  goToDownload(): void {
    this.router.navigate(['/download']);
  }

  scrollToValues(): void {
    document.getElementById('sect-values')?.scrollIntoView({ behavior: 'smooth' });
  }

  async submitForm(): Promise<void> {
    this.sending = true;
    this.submitError = false;

    try {
      await this.sendSuggestion();

      this.formSubmitted = true;
      this.inputName = '';
      this.inputTradition = '';
      this.inputText = '';
    } catch (e) {
      console.error(e);
      this.submitError = true;
    } finally {
      this.sending = false;
    }
  }

  private async sendSuggestion(): Promise<void> {
    try {
      await this.sendSuggestionViaApi();
    } catch (apiError) {
      const localConfig = await this.loadLocalTelegramConfig();
      if (!localConfig) {
        throw apiError;
      }

      await this.sendSuggestionDirectly(localConfig);
    }
  }

  private async sendSuggestionViaApi(): Promise<void> {
    const response = await fetch('/api/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.inputName,
        tradition: this.inputTradition,
        description: this.inputText,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send suggestion via API');
    }
  }

  private async loadLocalTelegramConfig(): Promise<LocalTelegramConfig | null> {
    try {
      const response = await fetch(`/assets/dev-telegram.local.json?ts=${Date.now()}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        return null;
      }

      const config = (await response.json()) as Partial<LocalTelegramConfig>;
      if (!config.botToken || !config.chatId) {
        return null;
      }

      return {
        botToken: config.botToken,
        chatId: config.chatId,
      };
    } catch {
      return null;
    }
  }

  private async sendSuggestionDirectly(config: LocalTelegramConfig): Promise<void> {
    const message = [
      'New tradition suggestion',
      `Name: ${this.inputName || 'Anonymous'}`,
      `Tradition: ${this.inputTradition || 'Not provided'}`,
      `Description: ${this.inputText || 'Not provided'}`,
    ].join('\n');

    const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send suggestion directly to Telegram');
    }
  }

  get submitErrorText(): string {
    return this.ts.currentLang === 'ru'
      ? 'Не удалось отправить предложение. Проверьте интернет или настройки Telegram.'
      : this.ts.currentLang === 'kz'
        ? 'Ұсынысты жіберу мүмкін болмады. Интернетті немесе Telegram баптауларын тексеріңіз.'
        : 'Failed to send the suggestion. Check your internet connection or Telegram setup.';
  }
}
