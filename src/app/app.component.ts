import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Joaquin';
  age = 21;
  img = "https://randomuser.me/api/portraits/men/1.jpg"
  isBtnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }

  person = {
    name: "Joaquin",
    age: 21,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  }

  names: string[]= ["Nico", "Julian", "Santiago", "Joaquin"]
  arrayOfNumbersAndStrings: Array<string|Number> = ["Hi", 2, "Wow", 50];
  newName = "";

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  products: Array<Product> = [
    {
      name: "Big Garage",
      price: 3050,
      image: "./assets/images/garage.jpg",
      category: "all"
    },
    {
      name: "The best mountains",
      price: 9999,
      image: "./assets/images/mountains.jpg"
    },
    {
      name: "AirPlane for users",
      price: 1999,
      image: "./assets/images/plane.jpg"
    },
    {
      name: "A collection of shoes",
      price: 999,
      image: "./assets/images/garage.jpg"
    },
    {
      name: "The biggest forest in the world",
      price: 19999,
      image: "./assets/images/trees.jpg"
    },
  ]

  toggleButton() {
    this.isBtnDisabled = !this.isBtnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this. newName = "";
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
