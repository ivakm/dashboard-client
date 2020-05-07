import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DashboardComponentDialog } from "./components/dashboard-dialog.component";
import { IOrders } from "../interfaces/dashboard.interface";
import { DashboardService } from "../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
  ordersData: IOrders[];
  displayedColumn: string[];

  constructor(
    public dialog: MatDialog,
    private orderService: DashboardService) {
    this.displayedColumn = ["FIO", "title", "tel", "email", "describe"]
  }

  ngOnInit() {
    this.ordersData = this.orderService.getOrdersData();
  }

  openOrderForm(): void {
    const dialogRef = this.dialog.open(DashboardComponentDialog, {
      width: '70vw',
      height: '70vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ordersData = this.orderService.getOrdersData();
    });
  }
}

