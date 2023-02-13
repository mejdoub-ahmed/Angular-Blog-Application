import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the main AppModule for the application
import { AppModule } from './app/app.module';

// The platformBrowserDynamic is used to launch the application in a browser environment

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
