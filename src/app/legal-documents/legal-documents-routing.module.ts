import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalDocumentsPage } from './legal-documents.page';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { TermsOfServicePage } from './terms-of-service/terms-of-service.page';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: LegalDocumentsPage
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'howitworks',
    component: HowItWorksComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServicePage
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalDocumentsPageRoutingModule {}
