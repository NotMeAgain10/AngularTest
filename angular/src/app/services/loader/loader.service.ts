import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean = false 
  constructor() { }

  setLoading(loading:boolean) {
    this.isLoading = loading
  }

}
