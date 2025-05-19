import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

registerLocaleData(ptBr);


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
