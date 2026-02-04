import { Injectable } from '@angular/core';

export interface AppConfig {
  production: boolean;
  apiUrl: string;
  appName: string;
  version: string;
  features: {
    enableGeolocation: boolean;
    enableEmailNotifications: boolean;
    enablePrescriptionDownload: boolean;
    enableSymptomSearch: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = {
    production: false,
    apiUrl: 'http://localhost:5000/api',
    appName: 'Pulse Hospital Management System',
    version: '1.0.0',
    features: {
      enableGeolocation: true,
      enableEmailNotifications: true,
      enablePrescriptionDownload: true,
      enableSymptomSearch: true
    }
  };

  getConfig(): AppConfig {
    return this.config;
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }

  isProduction(): boolean {
    return this.config.production;
  }

  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }

  updateConfig(newConfig: Partial<AppConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  setExternalConfig(externalConfig: Partial<AppConfig>): void {
    this.updateConfig(externalConfig);
  }
}