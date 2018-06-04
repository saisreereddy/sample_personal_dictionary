import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";
import RateLimiter from 'rxjs-ratelimiter';

@Injectable()
export class GotHttpService {
  private rateLimiter = new RateLimiter(1, 1000);
  constructor(private _http: HttpClient) {
    console.log("BlogHttpService is called")
      }
      private handleError(err: HttpErrorResponse) {
        console.log("Handle error Http calls")
        console.log(err.message);
        return Observable.throw(err.message);
      }
              getDictonaryData(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name);
                   return this.rateLimiter.limit(myResponse);

              }
              getDictonaryDataSentences(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/sentences');
                return this.rateLimiter.limit(myResponse);

              }
              getDictonaryDataSynonyms(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/synonyms');
                return this.rateLimiter.limit(myResponse);

              }
              getDictonaryDataAntonyms(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/antonyms');
                return this.rateLimiter.limit(myResponse);

              }
              getAutocompleteDictonaryData(name): any {
                let myResponse = this._http.get('/oxfordapiauto/' + 'en' + '?q=' + name + '&prefix=true' + '&limit=10');
                return this.rateLimiter.limit(myResponse);

              }

}
