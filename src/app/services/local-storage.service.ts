import { Injectable } from '@angular/core';
import { IStorage } from './storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorage {
  constructor() { }

  set(item: any): void {
    console.log('local storage');
  }

  get(key: string): any {
    return 'local storage';
  }
}
