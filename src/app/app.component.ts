import { Component , OnInit, ViewContainerRef , AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent implements OnInit , AfterViewInit {
  title = 'Personal Dictionary';
  constructor(private location: Location, private toastr: ToastsManager, private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  state: String = 'small';
  ngAfterViewInit() {
          this.state = (this.state === 'small' ? 'large' : 'small');
    }
  ngOnInit() {

  }

  goBackToPreviousPage(): any {
    this.location.back();
  }
}
