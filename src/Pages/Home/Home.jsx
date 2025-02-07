import React from "react";
import "./Home.css"
import Herosection from "../../Components/Herosection/Herosection";
import Searchform from "../../Components/SearchForm/Searchform";
import LastHoliday from "../../Components/LastHoliday/LastHoliday";
import NextDestination from "../../Components/NextDestination/NextDestination";
import CallAction from "../../Components/CallAction/CallAction";


function Home(){
    return(
    <div className="home-page"> 
        <Herosection/>
        <Searchform/>
        <LastHoliday/>
        <NextDestination/>
        <CallAction/>
        
    </div>
    )
}
 export default Home;