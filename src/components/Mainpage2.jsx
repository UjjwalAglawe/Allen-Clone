import React from "react";
import img1 from '../assets/1.svg'
import img2 from '../assets/2.svg'
import img3 from '../assets/3.svg'
import img4 from '../assets/4.svg'

function MainPage2() {
    return (
        <div className=" bg-white">
            <h2 className="p-8 text-2xl flex justify-center font-bold text-gray-800">Why Allen Online</h2>


            <div className="flex px-[170px] justify-between">
                <img src={img1} className="relative left-[80px] top-[-20px] mb-4 w-[55px] h-[55px]" alt="Kota Faculty" />

                <div className=" bg-slate-100 rounded-2xl p-4 w-[270px] h-auto shadow-md flex flex-col items-start">
                    <h1 className="text-xl font-bold py-4 text-gray-700">Kota Faculty</h1>
                    <span className="text-gray-700 leading-6">
                    Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years
                    </span>
                </div>

                <img src={img1} className="relative left-[80px] top-[-20px] mb-4 w-[55px] h-[55px]" alt="Kota Faculty" />
                <div className=" bg-slate-100 rounded-2xl p-4 w-[270px] h-auto shadow-md flex flex-col items-start">
                    <h1 className="text-xl font-bold py-4 text-gray-700">Proven Results</h1>
                    <span className="text-gray-700 leading-6">
                    Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams
                    </span>
                </div>

                <img src={img1} className="relative left-[80px] top-[-20px] mb-4 w-[55px] h-[55px]" alt="Kota Faculty" />
                <div className=" bg-slate-100 rounded-2xl p-4  w-[270px] h-50">
                    <h1 className="text-xl font-bold py-4 text-gray-700">Learning Tools</h1>
                    <span className="text-gray-700 leading-6">
                    24x7 doubt resolution and customized study material to test, and improve continuously
                    </span>
                </div>

                <img src={img1} className="relative left-[80px] top-[-20px] mb-4 w-[55px] h-[55px]" alt="Kota Faculty" />
                <div className=" bg-slate-100 rounded-2xl p-4  w-[270px] h-50">
                    <h1 className="text-xl font-bold py-4 text-gray-700">Mentor Support</h1>
                    <span className="text-gray-700 leading-6">
                    Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents
                    </span>
                </div>
            </div>

            <div className="p-3 mt-8 flex content-center justify-center pb-6">
            <button className=" bg-blue-700 p-3 rounded-3xl text-white font-bold px-4 ">Explore Online Courses</button>
            </div>
        </div>
    )
}

export default MainPage2;





{/* <div className="flex px-[220px] justify-between">
                {/* Card 1 */}
                // <img src={img1} className="relative left-[80px] top-[-20px] mb-4 w-[55px] h-[55px]" alt="Kota Faculty" />
                // <div className="bg-slate-100 rounded-2xl p-6 w-[260px] shadow-md flex flex-col items-start">
                    
                //     <h1 className="text-xl font-bold pb-2 text-gray-800 pt-6">Kota Faculty</h1>
                //     <span className="text-sm text-gray-600 leading-6">
                //         Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years
                //     </span>
                // </div> */}