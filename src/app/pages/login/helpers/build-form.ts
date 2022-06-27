import { FormControl, FormGroup, Validators } from '@angular/forms';

interface FormLoginModel {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export class FormHelper {
  protected form: FormGroup<FormLoginModel>;

  constructor() {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = new FormGroup<FormLoginModel>({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
