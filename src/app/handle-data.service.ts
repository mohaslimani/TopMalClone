import { Injectable } from '@angular/core';
import { debounceTime, Observable } from 'rxjs';
import { myArray } from 'src/assets/array';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HandleDataService {
  List!: myArray;

  private url: string = 'https://api.jikan.moe/v4/top/';

  rawData: Array<any> = [];
  isDataHere: boolean = false;

  getData(str: string, page: number) {
    return this.htttp.get<any>(this.url + str + '?page=' + page);
  }

  constructor(private htttp: HttpClient) {}
}
