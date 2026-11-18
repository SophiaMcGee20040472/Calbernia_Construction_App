import { Component } from '@angular/core';
import { Stats } from '../../shared/components/stats/stats';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

import { HOME_DATA } from '../../core/data/home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeading, CtaSection, Stats],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly HOME_DATA = HOME_DATA;
}