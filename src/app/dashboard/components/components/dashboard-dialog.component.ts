import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
      FIO: [''],
      title: [''],
      tel: ['38', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      email: [''],
      describe: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm() {
    console.log(this.form.value)
  }

}
