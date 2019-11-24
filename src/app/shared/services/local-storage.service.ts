import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  store(key: string, value: any) { 
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) { 
    return localStorage.get(key);
  }

  remove(key: string) { 
    return localStorage.removeItem(key);
  }
}
