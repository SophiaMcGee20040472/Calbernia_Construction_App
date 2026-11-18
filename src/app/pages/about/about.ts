import { Component } from '@angular/core';
import { Stats } from '../../shared/components/stats/stats';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

import { ABOUT_DATA } from '../../core/data/about.data';

@Component({
  selector: 'app-about',
  standalone: true,

  imports: [RouterLink, SectionHeading, CtaSection, Stats],

  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly pageData = ABOUT_DATA;
}
