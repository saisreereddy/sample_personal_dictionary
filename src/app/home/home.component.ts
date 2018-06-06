import { Component, OnInit , ViewContainerRef, ElementRef, HostListener, Input} from '@angular/core';
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
import * as $ from 'jquery';
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
isOpen: boolean;
public imagesUrl;
queryField: FormControl = new FormControl();
onClickedOutside(e: Event) {
  console.log('Clicked outside:', e);
  event.stopPropagation();
// $(event.srcElement);
// this.isOpen = !this.isOpen;
}
  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.items = [
      { name: 'assets/Images/home.png' },
      { name: 'assets/Images/home.png' },
    ];
  }

  ngOnInit() {
    this.imagesUrl = [
      'http://www.graphics99.com/wp-content/uploads/2012/02/the-vacublary-of-the-average-person.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzZdDay4ZD8VvuAkEhK2DYYE5X4GUTwB1WY-x_ZGaOusQOLWM',
      'https://i.pinimg.com/originals/67/02/aa/6702aae3724fd6dd735f96882dedb2a9.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzuxsu86FqJ-9UpIv39nHlNQBVm_PBYYD7X6RKdDQYXJYi7qBYQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXTq2ZuW1tv7wZ4c6XcHXMM9bdVbNwKBmvid3gRBxtqxEuV8LiA',
  'http://tse2.mm.bing.net/th?id=OIP.0VGEZ-ffoe37CZgGlR9M_wHaFl',
  'https://i.pinimg.com/originals/54/ab/08/54ab087174827adfd17ab31066807e88.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlY2pkmOrpwtDzGL0bTk7ivut_8sdEj7TuT_0ZcUI8P6Bh9t_9',
  'https://i.pinimg.com/originals/24/58/53/2458537f7a982b8ac600ff2a68548a88.png',
  'https://i.pinimg.com/originals/0c/a1/0e/0ca10ed68635e24bf1f0cdcd595a264e.jpg'
  ];
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
