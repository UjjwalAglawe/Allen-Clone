import React from "react";
import Scholership from '../assets/Scholership.avif';
import coursel1 from '../assets/coursel1.avif';
import card1 from '../assets/card1.webp';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.webp';
import MainPage2 from "./Mainpage2";
import MainPage3 from "./Mainpage3";
import MainPage4 from "./Mainpage4";
import MainPage5 from "./Mainpage5";
import MainPage6 from "./Mainpage6";
import MainPage7 from "./Mainpage7";
import qr from '../assets/qr.avif';


function MainPage() {
    return (
        <div className="  bg-slate-100 pt-11">
            <div>
                <img src={Scholership} className=" p-[250px] py-[50px] cursor-pointer" />
            </div>

            <div className="px-[250px] flex justify-between">
                <div className="">
                    <h2 className="text-3xl font-bold py-4">Online coaching that delivers <br />results</h2>
                    <span className="mt-[40px] block text-xl">Explore our online courses</span>
                    <span className="flex space-x-4 items-center mt-[20px] text-xl font-bold">
                        <span className="border-2 border-blue-700 rounded-full px-5 py-3 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-400">NEET</span>
                        <span className="border-2 border-blue-700 rounded-full px-5 py-3 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-400">JEE</span>
                        <span className="border-2 border-blue-700 rounded-full px-5 py-3 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-400">Class 6-10</span>
                    </span>
                </div>
                <div>
                    <img src={coursel1} className="h-[250px] pr-[50px]"></img>
                </div>
            </div>


            <div className="max-w-6xl mx-auto pb-9">
                <h1 className="text-2xl font-bold mb-10 p-4 mt-6 px-7 pb-2">
                    Win up to 90% scholarship | ALLEN Online Scholarship Test
                </h1>
                <div className="flex justify-between px-12">
                    {/* <!-- Card 1 --> */}
                    <div style={{ backgroundImage: `url(${card3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-white shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                        <span className="text-lg font-bold">AOSAT for JEE</span>
                        <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 11 & 12</span>
                        <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <div style={{ backgroundImage: `url(${card1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-white shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                        <span className="text-lg font-bold ">AOSAT for NEET</span>
                        <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 11 & 12</span>
                        <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div style={{ backgroundImage: `url(${card2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-80 bg-white shadow-lg rounded-lg h-52 p-6 cursor-pointer">
                        <span className="text-lg font-bold">AOSAT for Class 6-10</span>
                        <span className="text-sm text-gray-600 block mb-[90px]">Session: 2025-2026 | Class 6 & 10</span>
                        <button className=" text-lg text-blue-700 font-bold">Register &#8594;</button>
                    </div>
                </div>
            </div>

            <MainPage2/>
            <MainPage3/>
            <MainPage4/>
            <MainPage5/>
            <MainPage6/>
            <img src={qr} className="px-[250px]"/>
            <MainPage7/>


        </div>
    )
}

export default MainPage;