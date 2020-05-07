import { NgModule } from '@angular/core';

import { DashboardComponentDialog } from "./components/components/dashboard-dialog.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DashboardComponent } from "./components/dashboard.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatToolbarModule
  ],
  declarations: [DashboardComponent, DashboardComponentDialog],
  entryComponents: [DashboardComponentDialog],
})
export class DashboardModule {
}
