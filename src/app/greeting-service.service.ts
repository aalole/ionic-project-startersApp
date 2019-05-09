import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingServiceService {

  constructor(private http: HttpClient) { }

  getlocalData() {
    return this.http.get("assets/data/read.json");

  }
}
