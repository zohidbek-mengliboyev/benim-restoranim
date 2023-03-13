import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input() dish!: Dish;

  constructor(public menuComp: MenuComponent) { }

  ngOnInit(): void {
  }

}
