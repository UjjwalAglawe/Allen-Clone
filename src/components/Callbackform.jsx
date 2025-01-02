import React from "react";
import formimg from '../assets/formimg.avif';

function CallbackForm() {
    return (
        <div className="py-[40px] flex">
            {/* Left Side: Image */}
            <img
                src={formimg}
                alt="Form Illustration"
                className="relative w-[300px] h-[300px] pr-5 top-[70px]"
            />

            {/* Right Side: Form */}
            <div className="bg-blue-50 w-full h-[500px] rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold py-3">Request a callback</h2>
                <hr className="border-gray-200 mb-6" />

                {/* Form Section */}
                <form>
                    {/* Row 1: Student Name and Mobile Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                                Student's full name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Ex: Rohit Singh"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="mobileNumber">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                id="mobileNumber"
                                placeholder="Ex: +91 9876543210"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Row 2: Class and Goals */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="class">
                                Class
                            </label>
                            <select
                                id="class"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                                <option>9th</option>
                                <option>10th</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="goals">
                                Goals
                            </label>
                            <select
                                id="goals"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>JEE ADVANCED</option>
                                <option>JEE MAINS</option>
                                <option>NEET</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 3: Preferred Courses and State */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="courses">
                                Preferred Courses
                            </label>
                            <select
                                id="courses"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Online Courses</option>
                                <option>Classroom Courses</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                                State
                            </label>
                            <select
                                id="state"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Andaman and Nicobar Islands</option>
                                <option>Delhi</option>
                                <option>Maharashtra</option>
                                <option>Rajasthan</option>
                                <option>Tamil Nadu</option>
                            </select>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex justify-center">
                    <p className="text-sm text-gray-600 mb-4">
                        By continuing, you agree to our{" "}
                        <a href="#" className="text-blue-500 underline">
                            Terms & Conditions
                        </a>
                    </p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white text-lg font-medium py-2 px-20 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CallbackForm;