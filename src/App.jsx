import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

export const mycontext = createContext('')

const App = () => {
  let products=[ {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFr-8dPn-NFcuHFNs21bxGcGcLklxrwFheKw&s",
    ]
},
{
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnobOt_rKPpeTnAln9NS29G0dGK0waeubFig&s",
    ]
},
{
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5ujmnnI_kuz1iaTUB3uBDOjTtlYuRjaGMgFNrIXS_cnIGwzd_xdCpVXWmcrPpXgvGAo&usqp=CAU"
    ]
},
{
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvgg4JAxcIscB8BTNtMYlz_FNjiFcs517OA&s",
       
    ]
},
{
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOuVvzSqYKGlYrnextr454uewXhwQPbgp24FUTnjtdaDqZ7UsQ6Vo-tdi0lvw6TjDw2c&usqp=CAU",
       
    ]
}
]

const [data,setData]=useState(products) 
  return (
    <div>
      <mycontext.Provider value={[data,setData]}>
        <Navbar />
         <Cart />
      </mycontext.Provider>
    </div>
  );

};
export default App;