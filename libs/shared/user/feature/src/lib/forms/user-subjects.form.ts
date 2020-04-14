import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { User } from '@webapp/shared/user/data-access';

export class UserSubjects extends FormGroup {
  constructor() {
    super({
      uid: new FormControl({ value: '', readonly: true }),
      // subjects: new FormArray([]),
      subjects: new FormControl([]),
      deviceToken: new FormControl()
    })
  }
  readonly value: User;

  patch(value: User) {
    console.log(value);
    this.patchValue(value);
  }

  get subjects() {
    return this.get('subjects') as FormArray;
  }
  addSubject(name: string) {

    const control: { [k: string]: FormControl } = {};

    control[name] = new FormControl(true);

    this.subjects.push(
      new FormGroup(control)
    );
  }
}
