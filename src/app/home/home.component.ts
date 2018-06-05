import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import RateLimiter from 'rxjs-ratelimiter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];
  dictData: any;
name: any;
results: any;
autoDictData: any;
autoDictDataresults: any;
resultsforms: any[] = [];
sample: any;
someProperty: any;
someProperty2: any;
queryField: FormControl = new FormControl();
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.items = [
      { name: 'assets/Images/home.png' },
      { name: 'assets/Images/home.png' },
    ];
  }

  ngOnInit() {
    this.queryField.valueChanges
    .subscribe( result => {
      this.sample = result;
       console.log(result);
       console.log(this.sample);
    }
      );

         //  this.gotHttpService.getDictonaryData().subscribe(
           //   data => {

             //   this.dictData = data;
             //   console.log(this.dictData);

            //  } ,
            //  error => {
             //   console.log("some error occured");
             //   console.log(error.errorMessage);
             // }
           // );


              // Do code to fetch from this.dictData

    console.log(this.queryField.valueChanges);
    this.queryField.valueChanges
    .debounceTime(200).distinctUntilChanged().subscribe( result => this.gotHttpService.getDictonaryData(result).subscribe(
      data => {

        this.dictData = data;
        console.log(this.dictData);
        this.results = data.results;
        console.log(this.results);

      } ,
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    ) ) ;
    this.queryField.valueChanges
    .debounceTime(200).distinctUntilChanged().subscribe( result => result.length >= 3 ? this.gotHttpService.getAutocompleteDictonaryData(result).subscribe(
      data => {

        this.autoDictData = data;
        console.log(this.autoDictData);
        this.autoDictDataresults = data.results;
        console.log(this.autoDictDataresults);

      } ,
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    ) : this.toastr.clearToast);
}

methodInsideYourComponent(val) {
  console.log(val);
  this.someProperty = val.target.value;
  console.log(this.someProperty);
 // if (this.someProperty === 'books') {
  //  this.toastr.success('Redirecting to books', 'Success!');
//   this.allData = this.allData.filter(x => x.value === val);
//  console.log(this.allData);
this.router.navigate(['/fullpageview', { fullpageviewword : this.someProperty }]);


   // }
      }

      methodInsideYourComponent2(val) {
        console.log(val);
       this.someProperty2 = val;
       // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
      //   this.allData = this.allData.filter(x => x.value === val);
      //  console.log(this.allData);
      this.router.navigate(['/fullpageview', { fullpageviewword : this.someProperty2 }]);
    // }
      }
}
