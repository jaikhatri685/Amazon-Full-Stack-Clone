import React from 'react';
import poster_home from '../images/poster_home.jpg';
import Product from './Product';

import productData from "../productData"
import { v4 as uuid } from 'uuid';




export default function Home(){

 
    return <div className="pl-10 pr-10">
        <img src={poster_home} className="lg:-mb-52 sm:-mb-32 md:-mb-32"/>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 pl-5 pr-5 ">
            {productData.data.map((item,index)=>{return(<Product id= {uuid()} title={item.title} image={item.image } price={item.price} rating={item.rating}/>)})}
        </div>
       
    </div>;
}