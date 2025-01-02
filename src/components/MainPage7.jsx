import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-[250px]">
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-6 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>News</li>
              <li>MyExam EduBlogs</li>
              <li>Privacy policy</li>
              <li>Public notice</li>
              <li>Careers</li>
              <li>Dhoni Inspires NEET Aspirants</li>
              <li>Dhoni Inspires JEE Aspirants</li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li>Refund policy</li>
              <li>Transfer policy</li>
              <li>Terms & Conditions</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Popular Goals Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular goals</h4>
            <ul className="space-y-2">
              <li>NEET UG</li>
              <li>JEE Advanced</li>
              <li>6th to 10th</li>
            </ul>
          </div>

          {/* Courses Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li>Online Courses</li>
              <li>Distance Learning</li>
              <li>Online Test Series</li>
            </ul>
          </div>

          {/* Centers Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Centers</h4>
            <ul className="space-y-2">
              <li>Kota</li>
              <li>Bangalore</li>
              <li>Indore</li>
              <li>Delhi</li>
              <li>More centres</li>
            </ul>
          </div>

          {/* Exam Information Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Exam information</h4>
            <ul className="space-y-2">
              <li>JEE Main</li>
              <li>JEE Advanced</li>
              <li>NEET UG</li>
              <li>Class 10</li>
              <li>Class 12</li>
              <li>Olympiad Exam</li>
              <li>NEET Online Test Series</li>
              <li>JEE Online Test Series</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-sm">
            ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
