import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

import { SERVICES_DATA } from '../../core/data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, SectionHeading, CtaSection],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  pageData = SERVICES_DATA;

}
