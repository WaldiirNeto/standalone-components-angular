import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

interface FormLoginModel {
  username: UntypedFormControl<string | null>;
  password: UntypedFormControl<string | null>;
}

export class FormHelper {
  protected form: UntypedFormGroup<FormLoginModel>;

  constructor() {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = new UntypedFormGroup<FormLoginModel>({
      username: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }
}
