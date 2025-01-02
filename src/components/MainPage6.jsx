import React from "react";
import card4 from '../assets/card1.webp';
import card5 from '../assets/card2.webp';
import card6 from '../assets/card3.webp';
import CallbackForm from "./Callbackform";


function MainPage6() {
    return (
        <div className="bg-white px-[250px] pb-11">
            <h2 className="text-2xl font-bold py-9">Discover the perfect online course</h2>


            <div className="flex justify-between">

                <div style={{ backgroundImage: `url(${card4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-gray-200 shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                    <span className="text-lg font-bold">AOSAT for JEE</span>
                    <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 11 & 12</span>
                    <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                </div>

                <div style={{ backgroundImage: `url(${card5})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-gray-200 shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                    <span className="text-lg font-bold ">AOSAT for NEET</span>
                    <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 11 & 12</span>
                    <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                </div>

                <div style={{ backgroundImage: `url(${card6})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-gray-200 shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                    <span className="text-lg font-bold">AOSAT for Class 6-10</span>
                    <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 6 & 10</span>
                    <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                </div>
            </div>
            
            <CallbackForm/>
            

        </div>


    )
}

export default MainPage6;