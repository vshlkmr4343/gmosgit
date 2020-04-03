import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalDocumentsPageRoutingModule } from './legal-documents-routing.module';

import { LegalDocumentsPage } from './legal-documents.page';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { TermsOfServicePage } from './terms-of-service/terms-of-service.page';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LegalDocumentsPageRoutingModule
  ],
  declarations: [
    ContactUsComponent,
    LegalDocumentsPage,
    AboutusComponent,
    PrivacyPolicyComponent,
    HowItWorksComponent,
    FaqComponent,
    RulesComponent,
    TermsOfServicePage]
})
export class LegalDocumentsPageModule {}
