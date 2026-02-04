import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

// Microfrontend interface
interface MicrofrontendLifecycle {
  bootstrap: () => Promise<any>;
  mount: (element?: HTMLElement) => Promise<any>;
  unmount: () => Promise<void>;
}

// Bootstrap function for microfrontend
export const bootstrap = () => {
  return bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
};

// Mount function for microfrontend
export const mount = (element?: HTMLElement) => {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...appConfig.providers || []
    ]
  });
};

// Unmount function for microfrontend
export const unmount = async (): Promise<void> => {
  console.log('Pulse Hospital microfrontend unmounted');
  return Promise.resolve();
};

// Auto-bootstrap if not loaded as microfrontend
if (!(window as any).__PULSE_HOSPITAL_MF__) {
  bootstrap();
}

// Export for microfrontend consumption
const microfrontend: MicrofrontendLifecycle = {
  bootstrap,
  mount,
  unmount
};

(window as any).__PULSE_HOSPITAL_MF__ = microfrontend;

// Also export as ES modules for modern bundlers
export default microfrontend;