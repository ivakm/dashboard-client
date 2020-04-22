import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})
export class DashboardComponentDialog implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<DashboardComponentDialog>,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      lastName: [''],
      tel: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm() {
    console.log(this.form.value)
  }

}
