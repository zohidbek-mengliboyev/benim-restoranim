import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[] | undefined>
  {
    return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  }

  getPromotion(id: string): Promise<Promotion | undefined>
  {
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedPromotion(): Promise<Promotion | undefined>
  {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000)).toPromise();
  }

}






