import { Component , OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Personal Dictionary';
  constructor(private location: Location, private toastr: ToastsManager, private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {

  }

  goBackToPreviousPage(): any {
    this.location.back();
  }
}
