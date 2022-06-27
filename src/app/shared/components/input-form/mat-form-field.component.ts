import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'input-form',
  templateUrl: 'mat-form-field.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  styleUrls: ['mat-form-field.component.scss'],
})
export class MatFormFieldComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() controlName: string;
  @Input() textError: string;

  protected form: FormGroup;

  constructor(private _controlContainer: ControlContainer) {}

  ngOnInit() {
    this.form = this._controlContainer.control as FormGroup;
  }
}
