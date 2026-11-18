import { Component, Input } from '@angular/core';

export interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  @Input() stats: readonly StatItem[] = [];
  @Input() variant: 'home' | 'about' | 'contact' = 'home';
}
