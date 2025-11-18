import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  initialize(config: Object): Promise<boolean>;
  fetchData(url: string): Promise<Object>;
  startMonitoring(callback: (data: string) => void): void;
  getTypedExportedConstants(): {
    VERSION: string;
    PLATFORM: string;
  };
}

export default TurboModuleRegistry.getEnforcing<Spec>('MyVikkiSdk');