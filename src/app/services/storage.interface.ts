export interface IStorage {
  set(item: any): void;
  get(key: string): any;
}