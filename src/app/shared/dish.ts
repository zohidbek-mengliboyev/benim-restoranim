export class Dish {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  category: string | undefined;
  featured: boolean | undefined;
  label: string | undefined;
  price: string | undefined;
  description: string | undefined;
  comments: Comments[] | undefined;
}

interface Comments {
  star: number;
  label: string;
  author: string;
  date: Date;
}
