import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-applicant-process',
  templateUrl: './applicant-process.component.html',
  styleUrls: ['./applicant-process.component.css', '../app.component.css']
})
export class ApplicantProcessComponent {
  grossAnnualIncome: number = 0;

  constructor(private router: Router) {
  }

  onSubmit(loginForm: NgForm) {
    console.log('Form', loginForm);
    console.log('Value', loginForm.value);
  }

  onNumberChange(event: Event, value: string) {
    if (value && value.length > 0) {
      let number = parseInt(value);
      if (!isNaN(number)) {
        this.grossAnnualIncome = number * 12;
      }
    }
  }

  navigateForward() {
    this.router.navigate(['/application-process']);
  }

}
