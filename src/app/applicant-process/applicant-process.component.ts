import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-applicant-process',
  templateUrl: './applicant-process.component.html',
  styleUrls: ['./applicant-process.component.css', '../app.component.css']
})
export class ApplicantProcessComponent {
  constructor(private router: Router) {
  }

  navigateForward() {
    this.router.navigate(['/application-process']);
  }

}
