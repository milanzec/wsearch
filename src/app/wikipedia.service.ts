import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  search(term: string) {
    return 'this is wikipedia search result!'
  }
}
