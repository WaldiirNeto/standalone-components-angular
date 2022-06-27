import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-wn-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  styleUrls: ['./wn-button.component.scss'],
  templateUrl: './wn-button.component.html',
})
export class WnButtonComponent {
  @Input() disabled: boolean;
  @Input() loading: boolean;
}
