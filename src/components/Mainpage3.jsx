import React from "react";
import coursel2 from '../assets/coursel2.avif'
import topper from '../assets/topper.avif'

function MainPage3()
{
    return (
        <div className=" px-[250px] pt-4 pb-8">
            <h2 className="p-8 text-2xl flex justify-center font-bold text-gray-800">What's Trending</h2>
            <img src={coursel2}/>
            
            <h2 className="p-8 pt-9 text-2xl flex justify-center font-bold text-gray-800">Meet our Champions</h2>
            <img src={topper}/>

            <div className="flex justify-between pt-8 font-bold">
                <div className="bg-blue-200 py-[15px] px-36 rounded-3xl cursor-pointer">
                    View JEE 2024 Results   
                </div>
                
                <div className=" bg-blue-200 py-[15px] p-8 px-36 rounded-3xl cursor-pointer">
                    View NEET 2024 Results
                </div>
            </div>
            
        </div>

    )
}

export default MainPage3;