import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
// import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';
// declare let toastr;
@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styles: [`
  em{ float: right; color: #E05C65; padding-left: -10px;}
  .error input { background-color: #E3C3C5;}
  .error :: -webkit-input-placeholder { color: #999;}
  .error :: -moz-placeholder { color: #999;}
  .error : -moz-placeholder { color: #999;}
  .error : ms-input-placeholder { color: #999;}
  `]
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
           ) {}
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.toastr.success('Profile Saved');
    }
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.touched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.touched;
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
