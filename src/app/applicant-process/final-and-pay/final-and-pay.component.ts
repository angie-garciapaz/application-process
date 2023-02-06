import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-final-and-pay',
  templateUrl: './final-and-pay.component.html',
  styleUrls: ['./final-and-pay.component.css', './../../app.component.css']
})
export class FinalAndPayComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/sign']);
  }
}
