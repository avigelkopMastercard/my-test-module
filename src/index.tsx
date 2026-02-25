import MyTestModule from './NativeMyTestModule';

export async function multiply(a: number, b: number): Promise<{ result: number }> {
  return MyTestModule.multiply(a, b);
}
