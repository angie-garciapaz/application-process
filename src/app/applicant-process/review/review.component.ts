import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css', './../../app.component.css']
})
export class ReviewComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/offer']);
  }
}
