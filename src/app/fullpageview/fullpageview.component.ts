import { Component, OnInit , ViewContainerRef, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import * as $ from 'jquery';
import RateLimiter from 'rxjs-ratelimiter';

@Component({
  selector: 'app-fullpageview',
  templateUrl: './fullpageview.component.html',
  styleUrls: ['./fullpageview.component.css']
})
export class FullpageviewComponent implements OnInit {
  @ViewChild('myId') myId: ElementRef;
  dictData: any;
  results: any;
  lexicalentries: any;
  dictDataSentences: any;
  dictDataSentencesResults: any;
  dictDataSynonymsResults: any;
  dictDataSynonyms: any;
  dictDataAntonymsResults: any;
  dictDataAntonyms: any;
  showMore = false;
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    let myWord = this._route.snapshot.paramMap.get('fullpageviewword');
    console.log(myWord);
    this.gotHttpService.getDictonaryData(myWord).subscribe(
      data => {
        this.dictData = data;
        console.log(this.dictData);
        this.results = data.results;
        console.log(this.results);

      } ,
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        if (error.status === 400) {
          this.router.navigate(['/errorbadrequest']);
        }
        if (error.status === 404) {
          this.router.navigate(['/errornotfound']);
        }
        if (error.status === 403) {
          this.router.navigate(['/errorauthenticationfailed']);
        }
        if (error.status === 414) {
          this.router.navigate(['/errorurltoolong']);
        }
      }
    );
  }



  MoreSentences(val) {
    console.log(val);
    console.log(this.myId);
    this.showMore = !this.showMore;
    if (this.showMore) {
      $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-plus').addClass( 'glyphicon glyphicon-minus');
    }
    if (!this.showMore) {
      $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-minus').addClass( 'glyphicon glyphicon-plus');
      }
    this.gotHttpService.getDictonaryDataSentences(val).subscribe(
      data => {
        this.dictDataSentences = data;
        console.log(this.dictDataSentences);
        this.dictDataSentencesResults = data.results;
        console.log(this.dictDataSentencesResults);

      } ,
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        if (error.status === 400) {
          this.router.navigate(['/errorbadrequest']);
        }
        if (error.status === 404) {
          this.router.navigate(['/errornotfound']);
        }
        if (error.status === 403) {
          this.router.navigate(['/errorauthenticationfailed']);
        }
        if (error.status === 414) {
          this.router.navigate(['/errorurltoolong']);
        }
      }
    );

        }

  synonyms(val) {
    console.log(val);
    this.showMore = !this.showMore;
    if (this.showMore) {
    $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-plus').addClass( 'glyphicon glyphicon-minus');
    }
    if (!this.showMore) {
      $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-minus').addClass( 'glyphicon glyphicon-plus');
      }
    this.gotHttpService.getDictonaryDataSynonyms(val).subscribe(
      data => {
       // this.toastr.success('Good to go!!!', 'Success!');
        this.dictDataSynonyms = data;
        console.log(this.dictDataSynonyms);
        this.dictDataSynonymsResults = data.results;
        console.log(this.dictDataSynonymsResults);

      } ,
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        if (error.status === 400) {
          this.router.navigate(['/errorbadrequest']);
        }
        if (error.status === 404) {
          this.router.navigate(['/errornotfound']);
        }
        if (error.status === 403) {
          this.router.navigate(['/errorauthenticationfailed']);
        }
        if (error.status === 414) {
          this.router.navigate(['/errorurltoolong']);
        }
      }
    );

        }

        antonyms(val) {
          console.log(val);
          this.showMore = !this.showMore;
          if (this.showMore) {
          $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-plus').addClass( 'glyphicon glyphicon-minus');
          }
          if (!this.showMore) {
            $(event.srcElement.children[0]).removeClass( 'glyphicon glyphicon-minus').addClass( 'glyphicon glyphicon-plus');
            }
          this.gotHttpService.getDictonaryDataAntonyms(val).subscribe(
            data => {
          //    this.toastr.success('Good to go!!!', 'Success!');
              this.dictDataAntonyms = data;
              console.log(this.dictDataAntonyms);
              this.dictDataAntonymsResults = data.results;
              console.log(this.dictDataAntonymsResults);
         } ,
            error => {
              console.log("some error occured");
              console.log(error.errorMessage);
              if (error.status === 400) {
                this.router.navigate(['/errorbadrequest']);
              }
              if (error.status === 404) {
                this.router.navigate(['/errornotfound']);
              }
              if (error.status === 403) {
                this.router.navigate(['/errorauthenticationfailed']);
              }
              if (error.status === 414) {
                this.router.navigate(['/errorurltoolong']);
              }
            }
          );
              }
}



