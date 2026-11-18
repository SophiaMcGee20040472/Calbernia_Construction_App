import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css',
})
export class SectionHeading {
  @Input() label = '';
  @Input() title = '';
  @Input() description = '';
  @Input() variant: 'section-title' | 'section-heading' = 'section-title';
  @Input() light = false;
}
