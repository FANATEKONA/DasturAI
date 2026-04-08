import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from './translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private sub: Subscription;

  constructor(private ts: TranslationService, private cd: ChangeDetectorRef) {
    this.sub = ts.lang$.subscribe(() => cd.markForCheck());
  }

  transform(key: string): string {
    return this.ts.t(key);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
