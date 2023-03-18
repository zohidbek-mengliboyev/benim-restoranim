import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input() dish!: Dish;
  dish!: Dish;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe((dish) => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}
