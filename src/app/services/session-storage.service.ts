import { Injectable } from '@angular/core';
import { IStorage } from './storage.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements IStorage {
  constructor() { }

  set(item: any): void {
    console.log('using session storage');
  }

  get(key: string) {
    return 'session storage';
  }
}
