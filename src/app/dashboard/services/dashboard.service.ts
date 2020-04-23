import { Injectable } from "@angular/core";
import { IOrders } from "../interfaces/dashboard.interface";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  ordersMockData = new BehaviorSubject<IOrders[]>([
    { tel: 380971111111, FIO: 'guest', email: 'guest\'s mail', title: 'guest title', describe: 'some guest text' },
    { tel: 380971111111, FIO: 'guest2', email: 'guest2\'s mail', title: 'guest2 title', describe: 'some guest2 text' },
    { tel: 380971111111, FIO: 'guest3', email: 'guest3\'s mail', title: 'guest3 title', describe: 'some guest3 text' },
    { tel: 380971111111, FIO: 'guest4', email: 'guest4\'s mail', title: 'guest4 title', describe: 'some guest4 text' }
  ]);

  getOrdersData(): IOrders[] {
    return this.ordersMockData.getValue();
  }

  updateOrdersData(order: IOrders) {
    const state = this.getOrdersData();
    this.ordersMockData.next([...state, order]);
  }
}
