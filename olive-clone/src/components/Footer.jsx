import React from "react";
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <footer className="bg-[#466943] text-[#F0F5ED] py-20 px-8 rounded-[40px]  m-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          <div>
            <h4 className="text-lg font-medium mb-6">Explore More Olive Tools</h4>
            <ul className="space-y-4 opacity-90">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Explore Foods</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Allergy Scanner App</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Gluten Free Scanner</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Dairy Free App</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Food Ingredient Checker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">About</h4>
            <ul className="space-y-4 opacity-90">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Email us</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Contact us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end lg:items-start">
            <img src={logo} alt="Olive Logo" className="h-12 mb-6" />
            <p className="text-lg mb-8 max-w-[280px]">
              Get the latest lab testing data sent directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter Email address"
                className="bg-[#567a53] text-white placeholder-[#F0F5ED]/60 rounded-2xl px-6 py-4 flex-grow outline-none focus:ring-1 focus:ring-white/30 transition-all"
              />
              <button className="bg-white text-[#466943] px-8 py-4 rounded-full font-bold hover:bg-[#F0F5ED] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium">
          <div className="flex items-center gap-6 flex-wrap justify-center opacity-90">
            <a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Refund Policy</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Medical Consent</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Sign in</a>
          </div>
          <p className="opacity-90">© 2026 Olive Inc.</p>
        </div>
      </div>
    </footer>
  );
}