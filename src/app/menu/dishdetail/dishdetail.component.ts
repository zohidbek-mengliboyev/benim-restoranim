import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "src/app/menu/menu.component";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  constructor(public menuComp: MenuComponent) { }

  ngOnInit(): void {
  }

}
