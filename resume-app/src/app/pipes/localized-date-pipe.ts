import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {
  }

  transform(value: Date, format = 'long'): string | null {
    switch (this.translateService.currentLang) {
      case 'de':
        if(format === 'short') {
          return (value.getUTCMonth() + 1) + "." + value.getUTCFullYear();
        }
        return value.getUTCDate() + "." + (value.getUTCMonth() + 1) + "." + value.getUTCFullYear();
      case 'en':
      default:
        if(format === 'short') {
          return (value.getUTCMonth() + 1) + "/" + value.getUTCFullYear();
        }
        return (value.getUTCMonth() + 1) + "/" + value.getUTCDate() + "/" + value.getUTCFullYear();
    }
  }

}
