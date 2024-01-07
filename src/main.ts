import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { environment } from '@environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(_ => {
    if ((window as any).appBootstrap) (window as any).appBootstrap();
  })
  .catch((err) => console.error(err));
