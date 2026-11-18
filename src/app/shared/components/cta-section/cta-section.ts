import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {
  @Input() label = '';
  @Input() title = '';
  @Input() description = '';
  @Input() buttonText = 'Get in touch';
  @Input() buttonLink = '/contact';
  @Input() buttonHref = '';
  @Input() variant = 'cta-section';
  @Input() arrow = false;
}
