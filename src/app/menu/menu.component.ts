import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';


const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
      {
        star: 5,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 4,
        label: 'Sends anyone to the palace, I wish I could get my favourite',
        author: 'Paul McVites',
        date: new Date("2014-09-06"),
      },
      {
        star: 3,
        label: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: new Date("2015-02-14"),
      },
      {
        star: 4,
        label: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: new Date("2013-12-02"),
      },
      {
        star: 2,
        label: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: new Date("2011-12-02"),
      }
    ]
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments: [
      {
        star: 5,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 4,
        label: 'Sends anyone to the palace, I wish I could get my favourite',
        author: 'Paul McVites',
        date: new Date("2014-09-06"),
      },
      {
        star: 3,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 4,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 2,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      }
    ]
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments: [
      {
        star: 5,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 4,
        label: 'Sends anyone to the palace, I wish I could get my favourite',
        author: 'Paul McVites',
        date: new Date("2014-09-06"),
      },
      {
        star: 3,
        label: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: new Date("2015-02-14"),
      },
      {
        star: 4,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 2,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      }
    ]
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments: [
      {
        star: 5,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 4,
        label: 'Sends anyone to the palace, I wish I could get my favourite',
        author: 'Paul McVites',
        date: new Date("2014-09-06"),
      },
      {
        star: 3,
        label: 'Eat it, just eat it!',
        author: 'Michael Jaikishan',
        date: new Date("2015-02-14"),
      },
      {
        star: 4,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      },
      {
        star: 2,
        label: 'Imagine all the eatables, living in RIVOJ!',
        author: 'John Lemon',
        date: new Date("2012-10-17"),
      }
    ]
  }
 ];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish = DISHES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
