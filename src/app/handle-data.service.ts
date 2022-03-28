import { Injectable } from '@angular/core';
import {  debounceTime, Observable } from 'rxjs';
import { myArray } from 'src/assets/array';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  List!: myArray;
  // private url: string = 'https://api.myanimelist.net/v2/manga/ranking';
  // private url: string = 'https://api.aniapi.com/v1/anime';
  // private url: string = 'https://www.animenewsnetwork.com/encyclopedia/reports.xml?id=172';
  private url: string = 'https://api.jikan.moe/v4/top/';
  // private headerKey: string = 'X-MAL-CLIENT-ID';
  // private clientId: string = 'f9e906c6f04b6be5e16ae308600c094d';

  httpOp = {
    // headers: new HttpHeaders({`this.headerKey`: `this.clientId` });
    // headers: new HttpHeaders().set(`${this.headerKey}`, `${this.clientId}`),
  };
  rawData: Array<any> = [];
  isDataHere: boolean = false;


 getData(str: string){
    return this.htttp.get<any>(this.url + str);
  }

  constructor(private htttp: HttpClient) {}
}
