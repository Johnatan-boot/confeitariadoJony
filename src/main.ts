import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//se usar este a pagina nao carrega
//const bootstrap =()=> platformBrowserDynamic().bootstrapModule(AppModule);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*if (environment.hmr) {
  hmrBootstrap(module, bootstrap);
}else{
  bootstrap().catch((err)=>console.error());
}*/
