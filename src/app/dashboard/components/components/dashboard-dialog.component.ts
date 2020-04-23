import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DashboardService } from "../../services/dashboard.service";
import { log } from "util";

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})
export class DashboardComponentDialog implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<DashboardComponentDialog>,
              private formBuilder: FormBuilder,
              private dashboardService: DashboardService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      FIO: [''],
      title: [''],
      tel: ['38', [Validators.required, Validators.minLength(12)]],
      email: ['', [Validators.email]],
      describe: ['']
    });
  }

  submitForm() {
    const formData = this.form.value;
    if(!this.form.valid) {
      return;
    }

    this.dashboardService.updateOrdersData(formData);
    this.dialogRef.close();
  }

}
