import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loan-details',
  templateUrl: './application-process.component.html',
  styleUrls: ['./application-process.component.css', '../../app.component.css']
})
export class ApplicationProcessComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/review']);
  }
}
