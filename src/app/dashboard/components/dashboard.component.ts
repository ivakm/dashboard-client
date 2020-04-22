import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DashboardComponentDialog } from "./components/dashboard-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  constructor(public dialog: MatDialog) {}

  openOrderForm(): void {
    const dialogRef = this.dialog.open(DashboardComponentDialog, {
      width: '400px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`success`);
    });
  }
}

