import {Component, Inject, inject, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" routerLink=""><i class="fa fa-book"></i>Favourite</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="book">book</a>
            </li>
            <li *ngIf="!this.auth.notExpired(); else logout" class="nav-item">
              <a class="nav-link" routerLink="login">login<i class="fa fa-lock"></i></a>
            </li>
            <ng-template #logout>
            <li class="nav-item">
              <a class="nav-link" routerLink="logout">logout<i class="fa fa-unlock"></i></a>
            </li>
            </ng-template>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Header -->
    <header class="masthead" style="background-image: url('../../../assets/img/home.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1 class="title">{{this.title}} <i class="fa fa-heart" [style.color]='red'></i></h1>
              <span class="subheading">{{this.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .fa.fa-book {
      margin-right: 5px !important;
      color: orange;
    }

    .masthead {
      max-height: 450px;
    }

    .navbar-brand {
      font-size: 2.5rem;
    / / font-weight: 100 !important;
      font-family: 'Amatic SC', cursive;
    }

    .title {
      font-size: 7.2rem !important;
      font-family: 'Amatic SC', cursive;
    }

    #mainNav .navbar-nav > li.nav-item > a {
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header.masthead .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      max-height: 450px;
      width: 100%;
      background-color: #212529;
      opacity: .5;
    }
    .fa fa-look{
      color: green;
    }

  `]
})
export class HeaderComponent implements OnInit {
  red: string;
  title: string;
  subtitle: string;
  linkMenu: any;

  constructor(public auth: AuthService) {
    this.linkMenu = [{text: 'Book', url: ''}];
  }

  ngOnInit(): void {
    this.red = 'red';
    this.title = 'My Store';
    this.subtitle = '"Quello che volete noi lo abbiamo"';
  }

}
