import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApplicantProcessComponent} from "./applicant-process.component";
import {ApplicationProcessComponent} from "./application-process/application-process.component";
// import {DecisionComponent} from "./decision/decision.component";
import {FinalAndPayComponent} from "./final-and-pay/final-and-pay.component";
import {ReviewComponent} from "./review/review.component";
import {SelectOfferComponent} from "./select-offer/select-offer.component";
import {SignLoanComponent} from "./sign-loan/sign-loan.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ApplicantProcessComponent,
    ApplicationProcessComponent,
    // DecisionComponent,
    FinalAndPayComponent,
    ReviewComponent,
    SelectOfferComponent,
    SignLoanComponent,
  ],
  providers: []

})

export class ApplicantProcessModule {
}
