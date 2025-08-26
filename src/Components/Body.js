import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body =()=>{
    //state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants]=useState(resList);
    return(
        <div className="body">
            <div className="fifter">
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resInfo={restaurant} />
      ))}
            </div>
        </div>
     );
};
export default Body;