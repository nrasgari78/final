import {Injectable} from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TaminStorageService {

  private policy: 'local-storage' | 'memory';
  private memoryStorage = <any[]>([]);

  constructor() {
    if (this.doLocalStorageWork()) {
      this.policy = 'local-storage';
    } else {
      this.policy = 'memory';
    }
  }

  private doLocalStorageWork(): boolean {
    try {
      localStorage.setItem('dummy', 'dummy');
      if (localStorage.getItem('dummy') === 'dummy') {
        localStorage.removeItem('dummy');
        return true;
      } else {
        localStorage.removeItem('dummy');
        return false;
      }
    } catch {
      return false;
    }
  }

  set(key: string, value: string) {
    switch (this.policy) {
      case 'local-storage':
        localStorage.setItem(key, value);
        break;
      case 'memory':
        const item = this.memoryStorage.find(c => c.name === key);
        if (item) {
          item.value = value;
        } else {
          this.memoryStorage.push({name: key, value: value});
        }
        break;
    }
  }

  get(key: string) {
    switch (this.policy) {
      case 'local-storage':
        return localStorage.getItem(key);
      case 'memory':
        const item = this.memoryStorage.find(c => c.name === key);
        if (item) {
          return item.value;
        } else {
          return '';
        }
    }
  }

  exists(key: string): boolean {
    switch (this.policy) {
      case 'local-storage':
        return localStorage.getItem(key) !== null;
      case 'memory':
        const item = this.memoryStorage.find(c => c.name === key);
        return item !== null;
    }
  }

  remove(key: string) {
    switch (this.policy) {
      case 'local-storage':
        localStorage.removeItem(key);
        break;
        break;
      case 'memory':
        const index = this.memoryStorage.findIndex(c => c.name === key);
        if (index >= 0) {
          delete this.memoryStorage[index];
        }
    }
  }
}