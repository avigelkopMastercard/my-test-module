import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): { result: number };
}

export default TurboModuleRegistry.getEnforcing<Spec>('MyTestModule');
