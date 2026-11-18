import { Component } from '@angular/core';
import { Stats } from '../../shared/components/stats/stats';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { CONTACT_DATA } from '../../core/data/contact.data';
import { COMPANY_DATA } from '../../core/data/company.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Stats, SectionHeading],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  company = COMPANY_DATA;

  pageData = CONTACT_DATA;

}
