import { Component } from '@angular/core';
import { Product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/900';

  onLoaded(img: string){
    console.log('log padre', img)
  }

  products: Product[]=[ {
    id: '1',
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg',
    description: 'an amazing toy to your kiddo!'
  },
  {
    id: '2',
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.jpg'
  },
  {
    id: '3',
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/images/album.jpg'
  },
  {
    id: '4',
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg'
  }

  ]

  product:Product={
    id:'1',
    name: 'Producto 1',
    image:  'https://picsum.photos/800',
    price: 10,
  }
}
