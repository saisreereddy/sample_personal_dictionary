import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GotHttpService {
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
                return myResponse;

              }
              getDictonaryDataSentences(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/sentences');
                return myResponse;

              }
              getDictonaryDataSynonyms(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/synonyms');
                return myResponse;

              }
              getDictonaryDataAntonyms(name): any {
                let myResponse = this._http.get('/oxfordapi/' + name + '/antonyms');
                return myResponse;

              }
              getAutocompleteDictonaryData(name): any {
                let myResponse = this._http.get('/oxfordapiauto/' + 'en' + '?q=' + name + '&prefix=true' + '&limit=10');
                return myResponse;

              }

}
