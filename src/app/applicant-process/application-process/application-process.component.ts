import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css', '../../app.component.css']
})
export class LoanDetailsComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/review']);
  }
}
