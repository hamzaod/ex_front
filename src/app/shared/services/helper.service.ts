import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router) { }

  public goToPage(path: string) { 
    this.router.navigate([path]);
  }

  public enchaineString(listString: string[]) { 
    return listString.join(','); 
  }

}
