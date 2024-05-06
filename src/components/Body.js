

import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


          

const Body =() =>{
    const[listofres,setlistofres]=useState([
        {
           
            data: {
              type: 'F',
              id: '121603',
              name: 'Kannur Food Point',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'byilgyrcfz690ryoasww',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:4.1,
            
            }
        }, 
         {
           
            data: {
              type: 'F',
              id: '121613',
              name: 'KFC',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:4.9,
            
            }
        }, 
         {
           
            data: {
              type: 'F',
              id: '12603',
              name: 'DOMINOS',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'byilgyrcfz690ryoasww',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:3.1,
            
            }
        }, {
           
            data: {
              type: 'F',
              id: '12160',
              name: 'Kannur Food Point',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'byilgyrcfz690ryoasww',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:4.1,
            
            }
        }, 
         {
           
            data: {
              type: 'F',
              id: '11613',
              name: 'KFC',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:4.9,
            
            }
        }, 
         {
           
            data: {
              type: 'F',
              id: '1203',
              name: 'DOMINOS',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'byilgyrcfz690ryoasww',
              cuisines: ['Kerala', 'Chinese'],
              tags: [],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              avgRating:3.1,
            
            }
        }, 
          
          
    ])
    return(
        <div className="body">
            <div className="filter" 
            onClick={()=>{

const filteredlist=listofres.filter(
    (res)=>res.data.avgRating>4
)
            setlistofres(filteredlist)
                
            }}>
                <button>filter</button>
            </div>
            <div className="res-container">
            {listofres.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
               
        </div>
        </div>
    )

}

export default  Body;