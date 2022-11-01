export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    url: "",
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image1: "",
    image2: "",
    image3: "",
    rating: 0
  },
  {
    id: 2,
    url: "",
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image1: "",
    image2: "",
    image3: "",
    rating: 0
  },
  {
    id: 3,
    url: "",
    name: 'Phone Standard',
    price: 299,
    description: '',
    image1: "",
    image2: "",
    image3: "",
    rating: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/