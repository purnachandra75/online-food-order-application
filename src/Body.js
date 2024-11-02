import React from 'react'
import './App.css';
import Restruncard from './Restarentcard';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const Body=()=>{
    const [resturents,setResturent]=useState(null)
    const fatchData=async ()=>{
        const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.49095862670509&lng=78.4017889354235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json=await data.json()
        
        console.log(json.data)
        const res=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResturent(res)
        console.log(res) 
        
    }
    useEffect(()=>{
      fatchData()
      
    },[])
    
    
   
    return(
        
        <div className='resturent'>
            
            {resturents ? (
            resturents.map((resturent)=>(
              <Link key={resturent?.info?.id} to={'/resturentmenu/'+resturent?.info?.id}>
            <Restruncard  restarent={resturent } /> 
            </Link>)))
            : <p>Loading...</p>}
            
        </div>
    )
}
export default Body;