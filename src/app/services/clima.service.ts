import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url: string = 'https://api.openweathermap.org/data/2.5/weather?&appid='
  key: string = '3fb739a8dc29d96fa2067235ffdbac38'

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + "&q=" + ciudad;
    return this.http.get(URL)
  }
}
