import React from 'react';
import poster_home from '../images/poster_home.jpg';
import Product from './Product';
<<<<<<< HEAD

=======
import './Home.css';
>>>>>>> origin/master
import productData from "../productData"
import { v4 as uuid } from 'uuid';




export default function Home(){

 
<<<<<<< HEAD
    return <div className="pl-10 pr-10">
        <img src={poster_home} className="lg:-mb-52 sm:-mb-32 md:-mb-32"/>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 pl-5 pr-5 ">
            {productData.data.map((item,index)=>{return(<Product id= {uuid()} title={item.title} image={item.image } price={item.price} rating={item.rating}/>)})}
=======
    const RowProductsDisplay=(row)=>{
        let RowProducts=[]
        let k=3*row;

       
        for(let i=0; i<3;i++)
        {
            RowProducts.push(<Product id= {uuid()} title={productData.data[k+i].title} image={productData.data[k+i].image } price={productData.data[k+i].price} rating={productData.data[k+i].rating}/>)
               
           

        }
        return RowProducts


    }
    return <div className="home">
        <img src={poster_home} className="poster_home"/>
        <div className="row-1">
            
            {RowProductsDisplay(0)}
            
                    </div>
        <div className="row-2">
            {RowProductsDisplay(1)}
>>>>>>> origin/master
        </div>
       
    </div>;
}