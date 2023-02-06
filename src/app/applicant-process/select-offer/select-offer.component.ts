import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-offer',
  templateUrl: './select-offer.component.html',
  styleUrls: ['./select-offer.component.css', './../../app.component.css']
})
export class SelectOfferComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/final-and-pay']);
  }
}
