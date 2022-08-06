import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http: HttpClient) { }
  loadData() {
    this.http.get("https://v2.jokeapi.dev/joke/Any?amount=10")
  }
}
