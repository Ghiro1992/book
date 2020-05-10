import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione',
  template: `
  <div class="col-lg-6 col-md12 mx-0"><app-form></app-form></div>
  `,
  styles: []
})
export class GestioneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
