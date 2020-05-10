import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class='text-center container-fluid' style="width:300px;height:auto;position: relative;margin: 0 auto;">
      <div *ngIf='showerrmsg' class="alert alert-danger text-center">
        <p>{{showerrmsg}}</p>
      </div>
      <form novalidate #f="ngForm" (ngSubmit)=sendLogin(f) class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input type="text" id="username" class="form-control fadeIn second" name="username" #username="ngModel"
               [ngModel]="modelusername" placeholder="username" required>
        <div style="color:red" *ngIf="username.invalid && username.touched"><small style="font-size:0.75em">
          * Il campo username è obbligatorio</small>
        </div>
        <input type="password" id="password" class="form-control fadeIn third" name="password" #password="ngModel"
               [ngModel]="modelpassword" placeholder="password" required>
        <div style="color:#ff0000" *ngIf="password.invalid && password.touched"><small style="font-size:0.75em">
          * Il campo password è obbligatorio</small>
        </div>
        <div class="checkbox mb-3" style="font-size:0.80em">
          <label>
            <input type="checkbox" value="remeber me"> Remember me
          </label>
          <br/>
          <small> Torna alla <a routerLink=""><span style="color:orangered">Home</span></a></small>
        </div>
        <button [disabled]='f.invalid' class="btn btn-sm btn-warning" type="submit"> Sign in</button>
      </form>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  modelpassword: string;
  modelusername: string;
  showerrmsg: string;
  sendLogin(form: NgForm) {this.auth.login(form).subscribe(
    res => {
      alert('il token passato è ' + res);
      this.router.navigateByUrl('book');
    },
      error => this.showerrmsg = error);
  }
  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.auth.logout();
  }

}
