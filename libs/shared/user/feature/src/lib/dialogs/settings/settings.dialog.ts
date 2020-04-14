import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@webapp/shared/user/data-access';
import { SubjectsComponent } from '../../components/subjects/subjects.component';
import { UserSubjects } from './../../forms/user-subjects.form';

@Component({
  selector: 'user-settings',
  templateUrl: './settings.dialog.html',
  styleUrls: ['./settings.dialog.scss']
})
export class SettingsDialog implements OnInit {
  subjects = new UserSubjects();

  constructor(
    private service: UserService,
    public ref: MatDialogRef<SubjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);

  }
  onSubmit(uid) {
    // this.form.markAllAsTouched();
    // if (this.form.valid) {
    //   // this.service.update(uid, this.form.value)
    //   //   .then(() => this.ref.close());
    // }
  }
}
