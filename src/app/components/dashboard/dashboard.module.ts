import { NgModule } from '@angular/core';

import { DashboardComponentDialog } from "./dashboard-dialog.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DashboardComponent } from "./dashboard.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [DashboardComponent, DashboardComponentDialog],
  entryComponents: [DashboardComponentDialog],
})
export class DashboardModule {
}
