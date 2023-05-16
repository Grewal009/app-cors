import React, { useState, useEffect} from 'react';


const Data = () => {
    
    //console.log(restList);

    const [allRest, setAllRest] = useState([]);
    useEffect(
        ()=>{
            getRestaurants();
        },[]
    );

    async function getRestaurants(){
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7016176&lng=76.820049&page_type=DESKTOP_WEB_LISTING");

        //const data =  await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999")

        const data = await fetch("http://localhost:7200/");

        //const data = await fetch(`https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}`);

        const json = await data.json();
        console.log(json);
      
        setAllRest(json?.data?.cards[2]?.data?.data?.cards);
    }

  
    return (

        <React.Fragment>
        
            <div className="flex flex-wrap justify-center">
                {
                    allRest.map((restaurant)=>
                    {
                     return   <h4 key={restaurant.data.id}>{restaurant.data.name}</h4>
                    })
                  
                }
                
            </div>
        </React.Fragment>
    )
}

export default Data;