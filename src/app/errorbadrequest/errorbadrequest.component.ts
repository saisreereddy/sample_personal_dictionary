import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GotHttpService } from '../got-http-service.service';
import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-errorbadrequest',
  templateUrl: './errorbadrequest.component.html',
  styleUrls: ['./errorbadrequest.component.css']
})
export class ErrorbadrequestComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, private gotHttpService: GotHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.toastr.error('OOPS 400!!!', 'Error!');
  }

}
