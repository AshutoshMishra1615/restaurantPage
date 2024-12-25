import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Bistro Bliss</h2>
          <p className="text-sm">
            In the new era of technology, we look to the future with certainty
            and pride for our company.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
           
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Start Here
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Styleguide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Password Protected
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                404 Not Found
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Licenses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                View More
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us On Instagram</h3>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Food 1"
              className="rounded-lg"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Food 2"
              className="rounded-lg"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Food 3"
              className="rounded-lg"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Food 4"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Copyright © 2024  Pyro Developer. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
